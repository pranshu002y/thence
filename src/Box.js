import React, { useState } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();

  // State for email input and error message
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [redirectTimer, setRedirectTimer] = useState(5);

  // Function to handle email input change
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Check email format and update error message
    if (!isValidEmailFormat(value)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
 
    startCountdown();

    setTimeout(() => {
      navigate("/website");
    }, 5000);
  };

  // Function to validate email format
  const isValidEmailFormat = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to start countdown
  const startCountdown = () => {
    let timer = 5;
    setRedirectTimer(timer); 
    const interval = setInterval(() => {
      timer--;
      setRedirectTimer(timer); 
      if (timer === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div className="registration">
      <div className="registration-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cb8563eac44ade5b405e4ac495ffac72776b05e0ba29cfae73767941f231bc?"
          className="img-logo" 
        />
        <div className="input-container">
          <div className="input-content">
            <div className="spaninput"  onClick={()=> navigate("/website")}>
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
      <input
        type="text"
        placeholder="Enter your Name"
        className="input-name"
      />
      <input
        type="text"
        placeholder="Enter your Email"
        className="input-email"
        value={email}
        onChange={handleEmailChange}
      />
      {/* Display error message if email format is invalid */}
      {emailError && (
        <div className="email-error">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee47fb200244a6c520864730160ab185a73450bc22cb8b9741315a2b1b12331?"
            className="img-4"
          />
          <div className="valid-email">{emailError}</div>
        </div>
      )}
      <div className="submit-button" onClick={handleSubmit}>
        Submit
      </div>
      {redirectTimer > 0 && (
        <div className="redirect-message">
          Redirecting in {redirectTimer} seconds...
        </div>
      )}
    </div>
  );
};

export default Box;
