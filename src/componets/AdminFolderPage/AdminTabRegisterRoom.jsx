import React, { Component } from "react";
import "./AdminTabRegisterRoomStyle.css";

class AdminTabDRegisterRoom extends Component {
  state = {};
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <h1 style={mystyle}>Καταχώρηση Δωματίου</h1>
        <table className="TableRoom">
          <tr>
            <th align="left">
              <label>Κωδικός</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Τύπος</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Άνδρας</option>
                <option value="BreakfastOnly">Γυναίκα</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Αρ. Κλινών</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κλιματισμός</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Άνδρας</option>
                <option value="BreakfastOnly">Γυναίκα</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κλιματισμός</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Άνδρας</option>
                <option value="BreakfastOnly">Γυναίκα</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>WIFI</label>
            </th>
            <th align="right">
              <select className="filo">
                <option value="NoDiet">Άνδρας</option>
                <option value="BreakfastOnly">Γυναίκα</option>{" "}
              </select>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κόστος </label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
          </tr>
        </table>
        <button className="btnAddRoom">Καταχώρηση</button>
      </div>
    );
  }
}

export default AdminTabDRegisterRoom;
