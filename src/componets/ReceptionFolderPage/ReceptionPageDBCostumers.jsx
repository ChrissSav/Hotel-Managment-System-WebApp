import React, { Component } from "react";
import "./ReceptionPageDBCostumersStyle.css";

class ReceptionPageDBCostumers extends Component {
  state = {};
  render() {
    return (
      <div className="DBCostumers_container">
        <h1>Κατάλογος Πελατών</h1>
        <div className="wrap_table">
          <table class="table_CostumersDB">
            <thead>
              <tr>
                <th>Όνομα</th>
                <th>Επώνυμο</th>
                <th>Ημερ/νια γέννησης</th>
                <th>Φύλο</th>
                <th>Τηλέφωνο</th>
                <th>Α.Δ.Τ. / Διαβατήριο</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
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
