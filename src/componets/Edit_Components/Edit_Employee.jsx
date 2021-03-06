import React, { Component } from "react";
import "./Edit_EmployeeStyle.css";
import password_show from "../SVG/password_show.svg";
import password_hide from "../SVG/password_hide.svg";
import axios from "../axios";

class Edit_Employee extends Component {
  constructor(prop) {
    // console.log(prop);
    super(prop);
    this.state = {
      id: prop.employee.id,
      first_name: prop.employee.first_name,
      last_name: prop.employee.last_name,
      birthday: prop.employee.birthday,
      sex: prop.employee.sex,
      address: prop.employee.address,
      city: prop.employee.city,
      phone: prop.employee.phone,
      amka: prop.employee.amka,
      adt: prop.employee.adt,
      afm: prop.employee.afm,
      username: prop.employee.username,
      password: prop.employee.password,
      type: "password",
      background_Image: password_show
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.RegisetEmployee = this.RegisetEmployee.bind(this);
    this.PhoneValidation = this.PhoneValidation.bind(this);
    this.ΑΜΚΑValidation = this.ΑΜΚΑValidation.bind(this);
    this.AFMValidation = this.AFMValidation.bind(this);
    this.AcountCheck = this.AcountCheck.bind(this);
    this.ChangeFromat = this.ChangeFromat.bind(this);
  }
  componentDidMount() {
    // console.log("componentDidMount");
    this.setState({
      birthday: this.ChangeFromat(this.state.birthday)
    });
    //console.log("telos");
    //this.state.birthday = this.ChangeFromat(this.state.birthday);
  }

  handleClick(e) {
    console.log(e.target.id);
    if (this.state.type === "password") {
      this.setState({
        type: "text",
        background_Image: password_hide
      });
    } else {
      this.setState({
        type: "password",
        background_Image: password_show
      });
    }
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
    delete data.background_Image;
    //console.log("RegisetEmployee", data.birthday);
    if (
      this.CheckIfIsEmpty() &&
      this.PhoneValidation() &&
      this.ΑΜΚΑValidation() &&
      this.AFMValidation() &&
      this.AcountCheck()
    ) {
      //alert("Επιτυχής καταχώρηση");
      //console.log("true");
      axios.put("http://localhost:5023/employee", { data }).then(res => {
        //console.log(res.data);
        const result = res.data;
        if (result.status === "success") {
          alert("Επιτυχής καταχώρηση");
          this.onKeyPressed("exit");
        } else {
          alert("Ανεπιτυχής καταχώρηση");
        }
      });
    }
  }

  ChangeFromat(date) {
    //console.log("date", date);
    var d = date.split("/");
    var new_date = d[2] + "-" + d[1] + "-" + d[0];
    // console.log("date", new_date);
    return new_date;
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
    const date = this.state.birthday;
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
    const date = this.state.birthday;
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

  //=====================

  onKeyPressed(e) {
    if (e.key === "Escape") {
      this.props.close_dialog(1);
    } else if (e === "exit") {
      this.props.close_dialog(2);
    }
  }
  render() {
    return (
      <div
        className="Wrap_Edit_Employee"
        onKeyDown={e => {
          this.onKeyPressed(e);
        }}
      >
        <div className="Edit_Employee">
          <h1>Επεξεργασία Γραμματέα</h1>
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
                      autoFocus
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
                      id="birthday"
                      type="date"
                      onChange={this.handleChangeInput}
                      value={this.state.birthday}
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
                      <option value="ΑΝΔΡΑΣ">ΑΝΔΡΑΣ</option>
                      <option value="ΓΥΝΑΙΚΑ">ΓΥΝΑΙΚΑ</option>
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
                      maxLength="10"
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
                      maxLength="11"
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
                      maxLength="9"
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
                      maxLength="9"
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
                    <button
                      className="password_handl"
                      onClick={this.handleClick}
                      style={{
                        backgroundImage:
                          "url(" + this.state.background_Image + ")",
                        backgroundRepeat: "no-repeat",
                        overflow: "hidden"
                      }}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btnAddEmploye" onClick={this.RegisetEmployee}>
            Ενημέρωση
          </button>
        </div>
      </div>
    );
  }
}

export default Edit_Employee;
