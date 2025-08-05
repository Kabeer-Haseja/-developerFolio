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
        <div className="main blogs-section" id="blogs">
          <div className="blogs-header">
            <h1 className="blogs-title">
              <span className="title-highlight">Latest</span> Articles
            </h1>
            <p className="blogs-subtitle">
              Insights, tutorials, and thoughts on software development
            </p>
          </div>
          <div className="blog-main-div">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading latest articles...</p>
            </div>
          </div>
        </div>
      </Fade>
    );
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main blogs-section" id="blogs">
        <div className="blogs-header">
          <h1 className="blogs-title">
            <span className="title-highlight">Latest</span> Articles
          </h1>
          <p className="blogs-subtitle">
            Insights, tutorials, and thoughts on software development
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-grid">
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
          {(blogSection.blogs.length > 3 || mediumBlogs.length > 3) && (
            <div className="blogs-footer">
              <a 
                href={blogSection.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                Read All Articles
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
