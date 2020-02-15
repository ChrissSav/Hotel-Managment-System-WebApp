import React, { Component } from "react";
import "./ReceptionPageDBReservationsStyle.css";

class ReceptionPageDBReservations extends Component {
  state = {};
  render() {
    return (
      <div className="DBReservations_container">
        <h1>Κατάλογος Κρατήσεων</h1>
        <table class="table_DBReservations">
          <thead>
            <tr>
              <th>ΚΩΔΙΚΟΣ</th>
              <th>ΗΜΕΡ/ΝΙΑ</th>
              <th>ΚΩΔ ΓΡΑΜΜΑΤΕΑ</th>
              <th>ΚΩΔ ΠΕΛΑΤΗ</th>
              <th>ΑΡ ΔΩΜΑΤΙΟΥ</th>
              <th>ΑΦΙΞΗ</th>
              <th>ΑΝΑΧΩΡΗΣΗ</th>
              <th>ΑΡ ΕΝΗΛΙΚΩΝ</th>
              <th>ΑΡ ΑΝΗΛΙΚΩΝ</th>
              <th>ΘΕΣΗ ΣΤΑΘΜΥΣΗΣ</th>
              <th>ΔΙΑΤΡΟΦΗ</th>
              <th>ΚΟΣΤΟΣ</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div class="SearchReserverion">
          <label>Αναζήτηση με βάση τον κωδικό κράτησης ή πελάτη</label>
          <br></br>

          <input type="text" />
        </div>
      </div>
    );
  }
}

export default ReceptionPageDBReservations;
