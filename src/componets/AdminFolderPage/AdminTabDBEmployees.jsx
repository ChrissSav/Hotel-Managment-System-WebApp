import React, { Component } from "react";
import "./AdminTabDBEmployeesStyle.css";

class AdminTabDBEmployees extends Component {
  state = {};
  render() {
    return (
      <div className="DBEmployees">
        <h1>Β/Δ Υπαλλήλων</h1>
        <table className="Table_EmployeesDB">
          <thead>
            <tr>
              <th>Όνομα</th>
              <th>Επώνυμο</th>
              <th>Ημερ/νια γέννησης</th>
              <th>Φύλο</th>
              <th>Διεύθυνση</th>
              <th>Πόλη</th>
              <th>Τηλέφωνο</th>
              <th>Α.Μ.Κ.Α.</th>
              <th>Α.Δ.Τ.</th>
              <th>Α.Φ.Μ.</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="EmployeeSearch">
          <label>Αναζήτηση με βάση Επώνυμο ή Α.Φ.Μ.</label>
          <br></br>
          <input type="text" id="fname" name="firstname" />
        </div>
      </div>
    );
  }
}

export default AdminTabDBEmployees;
