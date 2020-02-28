import React, { Component } from "react";
import "./Edit_RoomStyle.css";
import axios from "axios";

class Edit_Room extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      id: prop.id,
      type: prop.type,
      num_of_beds: prop.num_of_beds,
      air_condition: prop.air_condition,
      pool: prop.pool,
      wifi: prop.wifi,
      price: prop.price,
      min_value: prop.min_value
    };
  }

  render() {
    return (
      <div className="Edit_Room">
        <h1>Επεξεργασία Δωματίου</h1>
        <table className="TableRoom">
          <tr>
            <th align="left">
              <label>Κωδικός</label>
            </th>
            <th align="right">
              <input
                id="id"
                type="number"
                min={this.state.min_value}
                onChange={this.handleChangeInput}
                value={this.state.id}
                readOnly
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
                <option value="Κανονικό">Κανονικό</option>
                <option value="Οικογενιακό">Οικογενιακό</option>
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
                <option value="ΟΧΙ">ΟΧΙ</option>
                <option value="ΝΑΙ">ΝΑΙ</option>
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
                <option value="ΟΧΙ">ΟΧΙ</option>
                <option value="ΝΑΙ">ΝΑΙ</option>
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
                <option value="ΟΧΙ">ΟΧΙ</option>
                <option value="ΝΑΙ">ΝΑΙ</option>
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
          Ενημέρωση
        </button>
      </div>
    );
  }
}

export default Edit_Room;
