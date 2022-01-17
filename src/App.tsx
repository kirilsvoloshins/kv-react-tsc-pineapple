import React from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body-wrapper">
      <div className="left-side">
        <NavBar />
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
