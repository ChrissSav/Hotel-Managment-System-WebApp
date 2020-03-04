import React, { Component } from "react";
import "./AddCostumerStyle.css";
import axios from "axios";
class AddCostumer extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      birthday: "",
      sex: "Άνδρας",
      phone: "",
      adt: ""
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.PhoneValidation = this.PhoneValidation.bind(this);
    this.CheckIfIsEmpty = this.CheckIfIsEmpty.bind(this);
    this.RegisetCostumer = this.RegisetCostumer.bind(this);
  }
  handleChangeInput(event) {
    // console.log(this.state);
    //console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value
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
  RegisetCostumer() {
    let data = Object.assign({}, this.state);
    //console.log("RegisetEmployee");
    if (this.CheckIfIsEmpty() && this.PhoneValidation()) {
      axios.post("http://localhost:5023/costumer", { data }).then(res => {
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
  render() {
    return (
      <div className="Wrap_AddCostumer">
        <div className="AddCostumer">
          <h1>Καταχώρηση Πελάτη</h1>
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
                      <option value="Άνδρας">Άνδρας</option>
                      <option value="Γυναίκα">Γυναίκα</option>{" "}
                    </select>
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
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btnAddCostumer" onClick={this.RegisetCostumer}>
            Καταχώρηση
          </button>
        </div>
      </div>
    );
  }
}

export default AddCostumer;
