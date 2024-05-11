import React from "react";
import "./dashboard.css";
import "./header.css";
import { useNavigate } from "react-router-dom";
import image from "../src/modal.png"
import Ask from "./Ask";
const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div>
  <div className="header">
    <div className="nav-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0e543b0b992986f9f9c673da2c563b0404cab75008f75199c63f8de8f3f40fa?"
        className="nav-img"
      />
      <div className="nav-head">
        <span className="nav-head-4" onClick={()=> navigate("/getproject")}>Get projects</span>
        <span className="nav-head-5">Onboard Talent</span>
      </div>
    </div>
  </div>
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
               
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <Ask/>
    </div>
    
    
  );
};
export default Dashboard;
