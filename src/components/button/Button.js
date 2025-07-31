import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, style = "primary"}) {
  const buttonClass = `button ${style}`;
  
  return (
    <div className={className}>
      <a className={buttonClass} href={href} target={newTab && "_blank"} rel={newTab && "noopener noreferrer"}>
        {text}
      </a>
    </div>
  );
}
