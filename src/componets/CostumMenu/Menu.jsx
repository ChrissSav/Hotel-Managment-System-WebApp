import React, { Component } from "react";
import "./MenuStyle.css";
import edit_svg from "../SVG/edit.svg";
import delete_svg from "../SVG/delete.svg";
class Menu extends Component {
  state = {};
  handleClick = () => {
    console.log("this is:", this);
  };
  render() {
    return (
      <div className="Costum_Menu">
        <div className="box" onClick={this.handleClick}>
          <img src={edit_svg} />
          <label>Επεξεργασια</label>
        </div>
        <div className="box" onClick={this.handleClick}>
          <img src={delete_svg} />
          <label>Διαγραφή</label>
        </div>
      </div>
    );
  }
}

export default Menu;
