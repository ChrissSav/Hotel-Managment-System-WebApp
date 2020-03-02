import React, { Component } from "react";
import "./AdminTabDBEmployeesStyle.css";
import CostumMenu from "../CostumMenu/Menu";
import UpdateEmployee from "../Edit_Components/Edit_Employee";
import axios from "axios";

class AdminTabDBEmployees extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      employees: [],
      active: 0,
      top_dist: 0,
      left_dist: 0,
      show: false,
      show_edit_employee: false,
      curren_employee: []
    };

    this.getEmployee = this.getEmployee.bind(this);
    this.Clear_Check = this.Clear_Check.bind(this);
    this.Get_Selected_Action = this.Get_Selected_Action.bind(this);
    this.Close_Dialog_Edit_Employee = this.Close_Dialog_Edit_Employee.bind(
      this
    );
  }
  getEmployee(e) {
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
  }
  componentDidMount() {
    axios.get("http://localhost:5023/employee/!").then(res => {
      //console.log(res.data);
      this.setState({
        employees: res.data
      });
    });
  }
  //=================================
  Get_Selected_Action(id) {
    //console.log("Selectedd : " + id);
    if (id === "edit") {
      this.setState({
        show_edit_employee: true
      });
    }
  }

  Close_Dialog_Edit_Employee(e) {
    // console.log("epistrofi", e);
    if (e === 2) {
      axios.get("http://localhost:5023/employee/!").then(res => {
        //console.log(res.data);
        this.setState({
          employees: res.data
        });
      });
    }
    this.setState({
      show_edit_employee: false
    });
  }

  Clear_Check() {
    this.setState({
      active: 0,
      show: false
    });
  }
  // ? true : false
  render() {
    const display_menu = this.state.show ? (
      <CostumMenu
        top_dist={this.state.top_dist}
        left_dist={this.state.left_dist}
        select_action={this.Get_Selected_Action}
      />
    ) : null;
    const display_update_employee = this.state.show_edit_employee ? (
      <UpdateEmployee
        employee={this.state.curren_employee}
        close_dialog={this.Close_Dialog_Edit_Employee}
      />
    ) : null;
    const { employees } = this.state;
    const List_of_Employees = employees.length ? (
      employees.map(employee => {
        return (
          <tr
            key={employee.id}
            id={employee.id}
            className={this.state.active === employee.id ? "active_row" : ""}
            onClick={() => this.setState({ active: 0, show: false })}
            onContextMenu={async e => {
              if (e.type === "contextmenu") {
                const y = e.nativeEvent.pageY;
                const x = e.nativeEvent.pageX;
                await this.setState({ active: 0, show: false });
                await this.setState({
                  show: true,
                  top_dist: y,
                  left_dist: x,
                  active: employee.id,
                  curren_employee: employee
                });
              }
            }}
          >
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.birthday}</td>
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
      <div
        className="DBEmployees"
        onClick={() => this.setState({ active: 0, show: false })}
      >
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
          <input
            type="text"
            onInput={this.getEmployee}
            onClick={this.Clear_Check}
          />
        </div>
        {display_menu}
        {display_update_employee}
      </div>
    );
  }
}

export default AdminTabDBEmployees;
