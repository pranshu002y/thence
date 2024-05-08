import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/header.css"
const Header = () => {
  const navigate = useNavigate();
  return (
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
  );
};
export default Header;
