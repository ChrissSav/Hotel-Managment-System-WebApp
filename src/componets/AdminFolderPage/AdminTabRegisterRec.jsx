import React, { Component } from "react";
import "./AdminTabRegisterRecStyle.css";
import axios from "axios";

class AdminTabRegisterRec extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      brithday: "",
      sex: "Άνδρας",
      address: "",
      city: "",
      phone: "",
      amka: "",
      adt: "",
      afm: "",
      username: "",
      password: "",
      type: "password"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.RegisetEmployee = this.RegisetEmployee.bind(this);
    this.CleanFields = this.CleanFields.bind(this);
  }

  handleClick() {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text"
    }));
  }
  handleChangeInput(event) {
    console.log(this.state);
    //console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  RegisetEmployee() {
    let data = Object.assign({}, this.state);
    delete data.type;
    axios.post("http://localhost:5023/employee", { data }).then(res => {
      //console.log(res.data);
      const result = res.data;
      if (result.status == "success") {
        alert("Επιτυχής καταχώρηση");
        this.CleanFields();
      } else {
        alert("Ανεπιτυχής καταχώρηση");
      }
    });
  }

  CleanFields() {
    this.setState({
      firts_name: "",
      last_name: "",
      brithday: "",
      sex: "Άνδρας",
      address: "",
      city: "",
      phone: "",
      amka: "",
      adt: "",
      afm: "",
      username: "",
      password: "",
      type: "password"
    });
  }
  render() {
    return (
      <div className="TabRegisterEmplo">
        <h1>Καταχώρηση Γραμματέα</h1>
        <div className="container">
          <table className="table1">
            <tbody>
              <tr>
                <th align="left">
                  <label>Όνομα</label>
                </th>
                <th align="right">
                  <input
                    id="firts_name"
                    type="text"
                    onChange={this.handleChangeInput}
                    value={this.state.firts_name}
                  />
                </th>
                <th align="left">
                  <label>Επώνυμο</label>
                </th>
                <th align="right">
                  <input
                    id="last_name"
                    type="text"
                    onChange={this.handleChangeInput}
                    value={this.state.last_name}
                  />
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Ημερ/νια γέννησης</label>
                </th>
                <th align="right">
                  <input
                    id="brithday"
                    type="date"
                    onChange={this.handleChangeInput}
                    value={this.state.brithday}
                  />
                </th>
                <th align="left">
                  <label>Φύλο </label>
                </th>
                <th align="right">
                  <select
                    id="sex"
                    className="filo"
                    onChange={this.handleChangeInput}
                    value={this.state.sex}
                  >
                    <option value="Άνδρας">Άνδρας</option>
                    <option value="Γυναίκα">Γυναίκα</option>{" "}
                  </select>
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Διεύθυνση</label>
                </th>
                <th align="right">
                  <input
                    id="address"
                    type="text"
                    onChange={this.handleChangeInput}
                    value={this.state.address}
                  />
                </th>
                <th align="left">
                  <label>Πόλη </label>
                </th>
                <th align="right">
                  <input
                    id="city"
                    type="text"
                    onChange={this.handleChangeInput}
                    value={this.state.city}
                  />
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Τηλέφωνο</label>
                </th>
                <th align="right">
                  <input
                    id="phone"
                    type="number"
                    maxlength="10"
                    onChange={this.handleChangeInput}
                    value={this.state.phone}
                  />
                </th>
                <th align="left">
                  <label>Α.Μ.Κ.Α. </label>
                </th>
                <th align="right">
                  <input
                    id="amka"
                    type="number"
                    maxlength="11"
                    onChange={this.handleChangeInput}
                    value={this.state.amka}
                  />
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Α.Δ.Τ.</label>
                </th>
                <th align="right">
                  <input
                    type="text"
                    id="adt"
                    onChange={this.handleChangeInput}
                    value={this.state.adt}
                  />
                </th>
                <th align="left">
                  <label>Α.Φ.Μ. </label>
                </th>
                <th align="right">
                  <input
                    type="number"
                    id="afm"
                    maxlength="9"
                    onChange={this.handleChangeInput}
                    value={this.state.afm}
                  />
                </th>
              </tr>
            </tbody>
          </table>

          <table className="table2">
            <tbody>
              <tr>
                <th>
                  <label>Όνομα χρήστη</label>
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    id="username"
                    type="text"
                    onChange={this.handleChangeInput}
                    value={this.state.username}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>Κωδικός</label>
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    id="password"
                    type={this.state.type}
                    onChange={this.handleChangeInput}
                    value={this.state.password}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" onClick={this.handleClick} />
                    Εφμάνιση Κωδικού
                  </label>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btnAddEmploye" onClick={this.RegisetEmployee}>
          Καταχώρηση
        </button>
      </div>
    );
  }
}

export default AdminTabRegisterRec;
