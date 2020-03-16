import React, { Component } from "react";
import "./Edit_CostumerStyle.css";
import axios from "../axios";
import cookie from "react-cookies";

class Edit_Costumer extends Component {
  constructor(prop) {
    //console.log(prop);
    super(prop);
    this.state = {
      id: prop.costumer.id,
      first_name: prop.costumer.first_name,
      last_name: prop.costumer.last_name,
      birthday: prop.costumer.birthday,
      sex: prop.costumer.sex,
      phone: prop.costumer.phone,
      adt: prop.costumer.adt
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.PhoneValidation = this.PhoneValidation.bind(this);
    this.ChangeFromat = this.ChangeFromat.bind(this);
    this.UpadetCostumer = this.UpadetCostumer.bind(this);
  }
  componentDidMount() {
    // console.log("componentDidMount");
    this.setState({
      birthday: this.ChangeFromat(this.state.birthday)
    });
    //console.log("telos");
    //this.state.birthday = this.ChangeFromat(this.state.birthday);
  }

  handleChangeInput(event) {
    // console.log(this.state);
    //console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  ChangeFromat(date) {
    //console.log("date", date);
    var d = date.split("/");
    var new_date = d[2] + "-" + d[1] + "-" + d[0];
    // console.log("date", new_date);
    return new_date;
  }

  CheckIfIsEmpty() {
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const date = this.state.birthday;
    const adt = this.state.adt;

    //console.log(first_name);
    if (first_name.length <= 1) {
      alert("Ελεγξε το όνομα");
      return false;
    } else if (last_name.length <= 1) {
      alert("Ελεγξε το επίθετο");
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

  UpadetCostumer() {
    let data = Object.assign({}, this.state);
    delete data.type;
    delete data.background_Image;
    //console.log("RegisetEmployee", data.birthday);
    if (this.CheckIfIsEmpty() && this.PhoneValidation()) {
      //alert("Επιτυχής καταχώρηση");
      //console.log("true");
      axios.put("http://localhost:5023/costumer", { data }).then(res => {
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
        className="Wrap_Edit_Costumer"
        onKeyDown={e => {
          this.onKeyPressed(e);
        }}
      >
        <div className="Edit_Costumer">
          <h1>Επεξεργασία Πελάτη</h1>
          <div className="container">
            <table className="table_Costumer">
              <tbody>
                <tr>
                  <th align="left">
                    <label>Όνομα</label>
                  </th>
                  <th>
                    <input
                      id="first_name"
                      type="text"
                      onChange={this.handleChangeInput}
                      value={this.state.first_name}
                      autoFocus
                    />
                  </th>
                  <th className="table1_tc">
                    <label>Επώνυμο</label>
                  </th>
                  <th>
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
                  <th>
                    <input
                      id="birthday"
                      type="date"
                      onChange={this.handleChangeInput}
                      value={this.state.birthday}
                    />
                  </th>
                  <th className="table1_tc">
                    <label>Φύλο </label>
                  </th>
                  <th>
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
                    <label>Τηλέφωνο</label>
                  </th>
                  <th>
                    <input
                      id="phone"
                      type="text"
                      maxLength="10"
                      onChange={this.handleChangeInput}
                      value={this.state.phone}
                    />
                  </th>
                  <th className="table1_tc">
                    <label>Α.Δ.Τ.</label>
                  </th>
                  <th>
                    <input
                      type="text"
                      id="adt"
                      maxLength="9"
                      onChange={this.handleChangeInput}
                      value={this.state.adt}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btnAddEmploye" onClick={this.UpadetCostumer}>
            Καταχώρηση
          </button>
        </div>
      </div>
    );
  }
}

export default Edit_Costumer;
