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
    this.PhoneValidation = this.PhoneValidation.bind(this);
    this.ΑΜΚΑValidation = this.ΑΜΚΑValidation.bind(this);
    this.AFMValidation = this.AFMValidation.bind(this);
    this.AcountCheck = this.AcountCheck.bind(this);
  }

  handleClick() {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text"
    }));
  }
  handleChangeInput(event) {
    // console.log(this.state);
    //console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  RegisetEmployee() {
    let data = Object.assign({}, this.state);
    delete data.type;
    //console.log("RegisetEmployee");
    if (
      this.CheckIfIsEmpty() &&
      this.PhoneValidation() &&
      this.ΑΜΚΑValidation() &&
      this.AFMValidation() &&
      this.PhoneValidation() &&
      this.AcountCheck()
    ) {
      //console.log("true");
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
    } else {
      //alert("false");
    }
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

  PhoneValidation() {
    const phone = this.state.phone;
    var patt = /[6][9]\d{8}/;
    if (patt.test(phone)) {
      return true;
    } else {
      alert("Ελγεξε τον αριθμο τηλεφώνου!");
      return false;
    }
  }

  ΑΜΚΑValidation() {
    const amka = this.state.amka;
    const date = this.state.brithday;
    //console.log(amka, date);
    const year = date.substring(2, 4);
    const month = date.substring(5, 7);
    const day = date.substring(date.length - 2, date.length);
    //console.log(day, month, year);
    var patt = new RegExp(
      "[" +
        day[0] +
        "][" +
        day[1] +
        "][" +
        month[0] +
        "][" +
        month[1] +
        "][" +
        year[0] +
        "][" +
        year[1] +
        "]\\d{5}"
    );
    //console.log(patt);
    if (patt.test(amka)) {
      return true;
    } else {
      alert("Ελεγξε τον ΑΜΚΑ");
      return false;
    }
  }

  AFMValidation() {
    const afm = this.state.afm;
    const patt = /\d{9}/;
    if (patt.test(afm)) {
      return true;
    } else {
      alert("Ελεγξε τον ΑΦΜ");
      return false;
    }
  }
  CheckIfIsEmpty() {
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const address = this.state.address;
    const city = this.state.city;
    const date = this.state.brithday;
    const adt = this.state.adt;

    //console.log(first_name);
    if (first_name.length <= 1) {
      alert("Ελεγξε το όνομα");
      return false;
    } else if (last_name.length <= 1) {
      alert("Ελεγξε το επίθετο");
      return false;
    } else if (address.length <= 1) {
      alert("Ελεγξε την Διεύθυνση");
      return false;
    } else if (city.length <= 1) {
      alert("Ελεγξε την Πόλη");
      return false;
    } else if (date.length <= 1) {
      alert("Ελεγξε την Ημερ/νια γέννησης");
      return false;
    } else if (adt.length <= 1) {
      alert("Ελεγξε τον ΑΔΤ");
      return false;
    } else {
      return true;
    }
  }

  AcountCheck() {
    const username = this.state.username;
    const password = this.state.password;
    if (username.length <= 1) {
      alert("Ελεγξε το όνομα χρηστη");
      return false;
    } else if (password.length <= 1) {
      alert("Ελεγξε τον κωδικο");
      return false;
    } else {
      return true;
    }
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
                    id="first_name"
                    type="text"
                    onChange={this.handleChangeInput}
                    value={this.state.first_name}
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
                    type="text"
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
                    type="text"
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
                    maxlength="9"
                    onChange={this.handleChangeInput}
                    value={this.state.adt}
                  />
                </th>
                <th align="left">
                  <label>Α.Φ.Μ. </label>
                </th>
                <th align="right">
                  <input
                    type="text"
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
