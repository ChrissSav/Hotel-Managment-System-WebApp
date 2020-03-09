import React, { Component } from "react";
import "./NotFoundStyle.css";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div className="NotFound">
        <div className="header_con">
          <h1>Hotel Managment System</h1>
        </div>
        <div className="wrap">
          <h2>404 Page Not Found</h2>
        </div>
      </div>
    );
  }
}

export default NotFound;
