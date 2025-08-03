import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      setIsLoading(true);
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error('Failed to fetch blogs');
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
            setIsLoading(false);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            setHasError(true);
            setIsLoading(false);
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  // Show loading state
  if (isLoading) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="blogs">
          <div className="blog-header">
            <h1 className="blog-header-text">{blogSection.title}</h1>
            <p
              className={
                isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
              }
            >
              {blogSection.subtitle}
            </p>
          </div>
          <div className="blog-main-div">
            <div className="blog-text-div" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '1.2rem', color: isDark ? '#ffffff' : '#000000' }}>
                Loading blogs...
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error" ||
            hasError
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  );
                })
              : mediumBlogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
