import React from 'react';
import { ThemeProvider } from "styled-components"
import './App.css';
import NavBar from "./components/NavBar.js"
import SubscriptionBox from "./components/SubscriptionBox.js"
import Socials from "./components/Socials.js"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = {
  mobile: "768px"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="body-wrapper">
        <div className="left-side">
          <NavBar />
          <div className="main-field">
            <SubscriptionBox />
            <Socials />
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
