import React, { Component } from "react";
import "./AdminTabDBRoomsStyle.css";

class AdminTabDBRooms extends Component {
  state = {};
  render() {
    return (
      <div className="DBRooms">
        <h1>Β/Δ Δωματίων</h1>
        <table className="Table_RoomsDB">
          <thead>
            <tr>
              <th>ΚΩΔΙΚΟΣ</th>
              <th>ΤΥΠΟΣ</th>
              <th>ΑΡ ΚΛΙΝΩΝ</th>
              <th>ΚΛΙΜΑΤΙΣΜΟΣ</th>
              <th>ΠΙΣΙΝΑ</th>
              <th>ΠΑΡΟΧΗ WIFI</th>
              <th>ΤΙΜΗ</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="RoomsSearch">
          <label>Αναζήτηση με βάση τον κωδικό του Δωματίου</label>
          <br></br>

          <input type="text" id="fname" name="firstname" />
        </div>
      </div>
    );
  }
}

export default AdminTabDBRooms;
