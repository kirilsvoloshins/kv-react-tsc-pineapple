import React from 'react';
import './App.css';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body-wrapper">
      <div className="left-side">
        <div className="nav-bar">
          <div className="logo">
            <img src="./media/pineapple_logo.png" alt="pineapple. logo"
              style={{ width: "25px", height: "40px", marginRight: "15px" }} />
            pineapple.
          </div>
          <div className="nav-links">
            <a href="#">About</a>
            <a href="#">How it works</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="main-field">
          <div className="header-main">
            Subscribe to newsletter
          </div>
          <div className="subheading" style={{ marginBottom: "50px" }}>
            Subscribe to our newsletter and get 10% discount on pineapple glasses.
          </div>
          <div>
            <input type="text" name="" id="" placeholder="Type your email address here..." />
          </div>

          <div className="tos">
            <input type="checkbox" name="" id="" style={{ height: "26px", width: "26px", padding: "0", margin: "0" }} />
            <span style={{ marginLeft: "15px" }}>I agree to <a href="#">terms of service</a></span>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default App;
