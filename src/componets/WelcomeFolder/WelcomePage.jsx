import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WelcomePageStyle.css";
import secreraty_img from "../SVG/Asset_1.svg";
import admin_img from "../SVG/Asset_3.svg";

class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <div className="WelcomePage_container">
        <div className="wrap">
          <h1>Hotel Managment System</h1>
        </div>
        <div class="container">
          <div class="box">
            <h3>Διαχειριστής</h3>
            <Link to="/adminlogin">
              <img src={admin_img} />
            </Link>
          </div>
          <div class="box">
            <h3>Γραμματεία</h3>
            <Link to="/reclogin">
              <img src={secreraty_img} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
