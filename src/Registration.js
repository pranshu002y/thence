import React from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
const Registration = () =>{
  const navigate = useNavigate();
    return(
        <div className="registration">
    <div className="registration-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cb8563eac44ade5b405e4ac495ffac72776b05e0ba29cfae73767941f231bc?"
        className="img-logo" 
        onClick={()=> navigate("/website")}
      />
      <div className="input-container">
        <div className="input-content">
          <div className="spaninput">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f899bb8546e135f7261423af4fae3fcc7da36e91c9d2820721b829826faba5e7?"
              className="img-21"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b77ecb1e21ea8280fac53cc15c5829133996f2bfdc910431b6f78ac61a5d0cd?"
              className="img-33"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="input-heading">Registration Form</div>
    <div className="sub-heading">Start your success Journey here!</div>
    <div className="input-name">Aneesh Karthikeyan</div>
    <div className="input-email">Aneesh1996</div>
    <div className="email-error">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee47fb200244a6c520864730160ab185a73450bc22cb8b9741315a2b1b12331?"
        className="img-4"
      />
      <div className="valid-email">Enter a valid email address</div>
    </div>
    <div className="submit-button">Submit</div>
  </div>
    )
}
export default Registration;