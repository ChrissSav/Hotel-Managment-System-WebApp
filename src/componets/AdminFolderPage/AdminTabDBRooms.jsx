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
              <th>Κωδικός</th>
              <th>Τύπος</th>
              <th>Αρ κλινών</th>
              <th>Κλιματισμός</th>
              <th>Πρισίνα</th>
              <th>Παροχή WIFI</th>
              <th>Τιμή</th>
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
