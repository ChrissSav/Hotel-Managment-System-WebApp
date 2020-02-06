import React, { Component } from "react";

class AdminTabDBEmployees extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Β/Δ Υπαλλήλων</h1>
        <table className="EmployesDB">
          <thead>
            <tr>
              <th>ΟΝΟΜΑ</th>
              <th>ΕΠΩΝΥΜΟ</th>
              <th>ΗΜΕΡ/ΝΙΑ ΓΕΝΝ</th>
              <th>ΦΥΛΟ</th>
              <th>ΔΙΕΥΘΥΝΣΗ</th>
              <th>ΠΟΛΗ</th>
              <th>ΤΗΛΕΦΩΝΟ</th>
              <th>Α.Μ.Κ.Α.</th>
              <th>Α.Δ.Τ.</th>
              <th>Α.Φ.Μ.</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="EmployeSearch">
          <label>Αναζήτηση με βάση Επώνυμο ή Α.Φ.Μ.</label>
          <br></br>

          <input type="text" id="fname" name="firstname" />
        </div>
      </div>
    );
  }
}

export default AdminTabDBEmployees;
