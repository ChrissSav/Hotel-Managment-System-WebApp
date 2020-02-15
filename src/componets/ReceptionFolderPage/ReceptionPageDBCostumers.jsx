import React, { Component } from "react";
import "./ReceptionPageDBCostumersStyle.css";

class ReceptionPageDBCostumers extends Component {
  state = {};
  render() {
    return (
      <div className="DBCostumers_container">
        <h1>Κατάλογος Πελατών</h1>
        <table class="table_CostumersDB">
          <thead>
            <tr>
              <th>ΟΝΟΜΑ</th>
              <th>ΕΠΩΝΥΜΟ</th>
              <th>ΗΜΕΡ/ΝΙΑ ΓΕΝΝΗΣΗΣ</th>
              <th>ΦΥΛΟ</th>
              <th>ΔΙΕΥΘΥΝΣΗ</th>
              <th>ΠΟΛΗ</th>
              <th>ΤΗΛΕΦΩΝΟ</th>
              <th>Α.Φ.Μ.</th>
              <th>Α.Δ.Τ. / ΔΙΑΒΑΤΗΡΙΟ</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div class="CostumerSearch">
          <label>Αναζήτηση με βάση Επώνυμο ή Τηλέφωνο</label>
          <br></br>

          <input type="text" />
        </div>
      </div>
    );
  }
}

export default ReceptionPageDBCostumers;
