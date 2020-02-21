import React, { Component } from "react";
import "./AdminTabRegisterRoomStyle.css";
import axios from "axios";

class AdminTabDRegisterRoom extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      type: "normal",
      num_of_beds: 1,
      air_condition: "no",
      pool: "no",
      wifi: "no",
      price: 0
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.SendDataToAPi = this.SendDataToAPi.bind(this);
    this.CleanFields = this.CleanFields.bind(this);
  }
  handleChangeInput(event) {
    console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  CleanFields() {
    this.setState({
      id: 1,
      type: "normal",
      num_of_beds: 1,
      air_condition: "no",
      pool: "no",
      wifi: "no",
      price: 0
    });
  }
  SendDataToAPi() {
    const room = this.state;
    axios.post("http://localhost:5023/room", { room }).then(res => {
      console.log(res.data);
      this.CleanFields();
    });
  }
  render() {
    return (
      <div className="TaBAddRoom">
        <h1>Καταχώρηση Δωματίου</h1>
        <table className="TableRoom">
          <tr>
            <th align="left">
              <label>Κωδικός</label>
            </th>
            <th align="right">
              <input
                id="id"
                type="number"
                min="0"
                onChange={this.handleChangeInput}
                value={this.state.id}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Τύπος</label>
            </th>
            <th align="right">
              <select
                id="type"
                onChange={this.handleChangeInput}
                value={this.state.type}
              >
                <option value="normal">Κανονικό</option>
                <option value="family">Οικογενιακό</option>
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Αρ. Κλινών</label>
            </th>
            <th align="right">
              <input
                id="num_of_beds"
                type="number"
                min="1"
                value={this.state.num_of_beds}
                onChange={this.handleChangeInput}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κλιματισμός</label>
            </th>
            <th align="right">
              <select
                id="air_condition"
                onChange={this.handleChangeInput}
                value={this.state.air_condition}
              >
                <option value="no">Οχι</option>
                <option value="yes">Ναι</option>
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Πισίνα</label>
            </th>
            <th align="right">
              <select
                id="pool"
                onChange={this.handleChangeInput}
                value={this.state.pool}
              >
                <option value="no">Οχι</option>
                <option value="yes">Ναι</option>
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>WiFi</label>
            </th>
            <th align="right">
              <select
                id="wifi"
                onChange={this.handleChangeInput}
                value={this.state.wifi}
              >
                <option value="no">Οχι</option>
                <option value="yes">Ναι</option>
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κόστος </label>
            </th>
            <th align="right">
              <input
                onChange={this.handleChangeInput}
                id="price"
                type="text"
                readOnly
                value={this.state.price + "  €"}
              />
            </th>
          </tr>
        </table>
        <button className="btnAddRoom" onClick={this.SendDataToAPi}>
          Καταχώρηση
        </button>
      </div>
    );
  }
}

export default AdminTabDRegisterRoom;
