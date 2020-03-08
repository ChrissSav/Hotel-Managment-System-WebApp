import React, { Component } from "react";
import "./MenuCostumerStyle.css";
import edit_svg from "../SVG/select.svg";
import add_svg from "../SVG/plus.svg";

class MenuCostumer extends Component {
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
      <div className="MenuCostumer" style={this.state}>
        <div
          id="select"
          className="box"
          onClick={this.Select_Action.bind(this)}
        >
          <img id="select" src={edit_svg} alt="edit_svg" />
          <label id="select">Επιλογή</label>
        </div>
        <div id="add" className="box" onClick={this.Select_Action.bind(this)}>
          <img id="add" src={add_svg} alt="add_svg" />
          <label id="add">Προσθήκη</label>
        </div>
      </div>
    );
  }
}

export default MenuCostumer;
