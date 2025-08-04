import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ blog, isDark }) {
  return (
    <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
      <a
        className={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"}
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
          {blog.title}
        </h3>
        <p className={isDark ? "small-dark small" : "small"}>
          {blog.description}
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
}
