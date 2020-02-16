import React, { Component } from "react";
import "./AdminTabRegisterRoomStyle.css";

class AdminTabDRegisterRoom extends Component {
  state = {};
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
              <input type="number" readOnly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Τύπος</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">type1</option>
                <option value="BreakfastOnly">type2</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Αρ. Κλινών</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κλιματισμός</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Ναι</option>
                <option value="BreakfastOnly">Οχι</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Πισίνα</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Ναι</option>
                <option value="BreakfastOnly">Οχι</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>WIFI</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Ναι</option>
                <option value="BreakfastOnly">Οχι</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κόστος </label>
            </th>
            <th align="right">
              <input type="text" readOnly />
            </th>
          </tr>
        </table>
        <button className="btnAddRoom">Καταχώρηση</button>
      </div>
    );
  }
}

export default AdminTabDRegisterRoom;
