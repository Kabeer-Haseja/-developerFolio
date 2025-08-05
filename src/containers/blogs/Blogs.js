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
        <div className="modern-blogs-container">
          <div className="loading-state">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
            </div>
            <h3 className="loading-text">Loading Articles...</h3>
            <p className="loading-subtext">Fetching the latest insights and updates</p>
          </div>
        </div>
      </Fade>
    );
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="modern-blogs-container">
        <div className="blogs-grid">
          {blogSection.displayMediumBlogs !== "true" ||
          mediumBlogs === "Error" ||
          hasError
            ? blogSection.blogs.map((blog, i) => {
                return (
                  <div key={i} className="blog-card-wrapper">
                    <BlogCard
                      isDark={isDark}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  </div>
                );
              })
            : mediumBlogs.map((blog, i) => {
                return (
                  <div key={i} className="blog-card-wrapper">
                    <BlogCard
                      isDark={isDark}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  </div>
                );
              })}
        </div>
        
        {blogSection.blogs.length > 0 && (
          <div className="blogs-footer">
            <div className="view-all-container">
              <button className="view-all-button">
                <span className="button-icon">📚</span>
                <span className="button-text">View All Articles</span>
                <span className="button-arrow">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
