fs = require("fs");
const https = require("https");
process = require("process");

// Try to load environment variables, but don't fail if .env doesn't exist
try {
  require("dotenv").config();
} catch (error) {
  console.log("No .env file found, using default values or environment variables");
}

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// Only fetch GitHub data if explicitly enabled and credentials are available
if (USE_GITHUB_DATA === "true" && GITHUB_USERNAME && GITHUB_TOKEN) {
  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn("GitHub request failed, but continuing build...");
      return;
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) {
          console.warn("Failed to save profile.json:", err);
          return;
        }
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.warn("GitHub request error:", error.message);
    // Don't throw error, just continue
  });

  req.write(data);
  req.end();
} else {
  console.log("Skipping GitHub data fetch - not enabled or missing credentials");
}

// Only fetch Medium data if username is provided
if (MEDIUM_USERNAME) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn("Medium request failed, but continuing build...");
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) {
          console.warn("Failed to save blogs.json:", err);
          return;
        }
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.warn("Medium request error:", error.message);
    // Don't throw error, just continue
  });

  req.end();
} else {
  console.log("Skipping Medium data fetch - no username provided");
}

console.log("Data fetch script completed successfully");
