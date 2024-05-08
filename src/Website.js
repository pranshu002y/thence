import React from "react";
import image from "../src/modal.png"
import Header from "./Header";
const Website = () => {
  return (
    <div>
<Header/>
    <div className="main">
      <div className="section">Success stories</div>
      <div className="section-span">Every success journey we’ve encountered.</div>
      <div className="container">
        <div className="section-container">
          <div className="column">
            <img loading="lazy" src={image} className="website-image" />
          </div>
          <div className="column-2">
            <div className="container-2">
              <span className="span-text">
                Enhance fortune 50 company’s insights teams research
                capabilities
              </span>
              <div className="dot-8">
                <div className="dot-1"></div>
                <div className="dot-2"></div>
                <div className="dot-3"></div>
              </div>
              <button className="explore-tab">
                <span className="explore-span" >Explore more</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5dd013e82f62f4777d9a36a1528294d7ff56b4f973d6f4ab0c9d6fd8f7d9b82?"
                  className="img-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Website;
