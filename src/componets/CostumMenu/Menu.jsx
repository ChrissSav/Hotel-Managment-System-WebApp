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
    this.Select_Action = this.Select_Action.bind(this);
  }
  Select_Action(e) {
    //console.log(e);
    //console.log(e.target.id);
    this.props.select_action(e.target.id);
  }
  render() {
    return (
      <div className="Costum_Menu" style={this.state}>
        <div id="edit" className="box" onClick={this.Select_Action.bind(this)}>
          <img id="edit" src={edit_svg} />
          <label id="edit">Επεξεργασία</label>
        </div>
        <div
          id="delete"
          className="box"
          onClick={this.Select_Action.bind(this)}
        >
          <img id="delete" src={delete_svg} />
          <label id="delete">Διαγραφή</label>
        </div>
      </div>
    );
  }
}

export default Menu;
