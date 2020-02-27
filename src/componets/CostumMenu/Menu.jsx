import React, { Component } from "react";
import "./MenuStyle.css";
import edit_svg from "../SVG/edit.svg";
import delete_svg from "../SVG/delete.svg";
class Menu extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      position: "absolute",
      top: props.top_dist,
      left: props.left_dist,
      margin: "0",
      padding: "0",
      display: "block"
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //console.log("this trhtrhrthtrhtrhtrhrthis:", this);
  }
  render() {
    return (
      <div className="Costum_Menu" style={this.state}>
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
