import React, { Component } from "react";
import "./AdminTabDBEmployeesStyle.css";
import axios from "axios";

class AdminTabDBEmployees extends Component {
  state = {
    costumers: [],
    active: 0
  };

  componentDidMount() {
    axios.get("http://localhost:5023/employees").then(res => {
      console.log(res.data);
      this.setState({
        costumers: res.data
      });
    });
  }
  // ? true : false
  render() {
    const { costumers } = this.state;
    const costumersList = costumers.length ? (
      costumers.map(costumer => {
        return (
          <tr
            id={costumer.id}
            className={this.state.active === costumer.id ? "active_row" : ""}
            onClick={() => this.setState({ active: costumer.id })}
          >
            <td>{costumer.first_name}</td>
            <td>{costumer.last_name}</td>
            <td>{costumer.brithday}</td>
            <td>{costumer.sex}</td>
            <td>{costumer.address}</td>
            <td>{costumer.city}</td>
            <td>{costumer.phone}</td>
            <td>{costumer.amka}</td>
            <td>{costumer.adt}</td>
            <td>{costumer.afm}</td>
            <td>{costumer.username}</td>
            <td>{costumer.password}</td>
          </tr>
        );
      })
    ) : (
      <tr></tr>
    );

    return (
      <div className="DBEmployees">
        <h1>Β/Δ Υπαλλήλων</h1>
        <div className="wrap_table">
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
            <tbody>{costumersList}</tbody>
          </table>
        </div>
        <div
          className="EmployeeSearch"
          onClick={() => this.setState({ active: 0 })}
        >
          <label>Αναζήτηση με βάση Επώνυμο ή Α.Φ.Μ.</label>
          <br></br>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default AdminTabDBEmployees;
