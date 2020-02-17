import React, { Component } from "react";
import "./AdminTabDBEmployeesStyle.css";
import axios from "axios";

class AdminTabDBEmployees extends Component {
  state = {
    employees: [],
    active: 0
  };
  getEmployee = e => {
    var id = e.target.value;
    if (e.target.value === "") {
      id = "!";
    }
    axios.get("http://localhost:5023/employee/" + id).then(res => {
      // console.log(res.data);
      this.setState({
        employees: res.data
      });
    });
  };
  componentDidMount() {
    axios.get("http://localhost:5023/employee/!").then(res => {
      //console.log(res.data);
      this.setState({
        employees: res.data
      });
    });
  }
  // ? true : false
  render() {
    const { employees } = this.state;
    const List_of_Employees = employees.length ? (
      employees.map(employee => {
        return (
          <tr
            id={employee.id}
            className={this.state.active === employee.id ? "active_row" : ""}
            onClick={() => this.setState({ active: employee.id })}
          >
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.brithday}</td>
            <td>{employee.sex}</td>
            <td>{employee.address}</td>
            <td>{employee.city}</td>
            <td>{employee.phone}</td>
            <td>{employee.amka}</td>
            <td>{employee.adt}</td>
            <td>{employee.afm}</td>
            <td>{employee.username}</td>
            <td>{employee.password}</td>
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
            <tbody>{List_of_Employees}</tbody>
          </table>
        </div>
        <div
          className="EmployeeSearch"
          onClick={() => this.setState({ active: 0 })}
        >
          <label>Αναζήτηση με βάση Επώνυμο ή Α.Φ.Μ.</label>
          <br></br>
          <input type="text" onInput={this.getEmployee} />
        </div>
      </div>
    );
  }
}

export default AdminTabDBEmployees;
