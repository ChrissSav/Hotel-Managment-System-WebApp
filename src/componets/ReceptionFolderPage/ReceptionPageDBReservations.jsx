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
              <th>Κωδικός</th>
              <th>Ημερ/νια</th>
              <th>Κωδ Υπαλλήλου</th>
              <th>Κωδ Πελάτη</th>
              <th>Αρ Δωματίου</th>
              <th>Άφιξη</th>
              <th>Αναχώρηση</th>
              <th>Αρ Ενηλίκων</th>
              <th>Αρ Ανηλίκων</th>
              <th>Θέση Στάθμευσης</th>
              <th>Διατροφή</th>
              <th>Κόστος</th>
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
