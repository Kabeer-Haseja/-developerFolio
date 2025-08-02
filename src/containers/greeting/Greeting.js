import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <h1 className="greeting-text">
            {greeting.title}
          </h1>
          <p className="greeting-text-p subTitle">
            {greeting.subTitle}
          </p>
          <SocialMedia />
          <div className="button-greeting-div">
            <Button 
              className="main-button" 
              text="Get in touch" 
              href="#contact" 
            />
            {greeting.resumeLink && (
              <Button 
                className="main-button" 
                text="View Resume" 
                href={greeting.resumeLink} 
                newTab={true}
              />
            )}
          </div>
        </div>
        <div className="greeting-image-div">
          <img
            alt="Developer working on laptop"
            src={require("../../assets/images/manOnTable.svg")}
          />
        </div>
      </div>
    </div>
  );
}
