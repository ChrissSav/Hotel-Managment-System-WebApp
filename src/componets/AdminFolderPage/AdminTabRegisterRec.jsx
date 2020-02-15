import React, { Component } from "react";
import "./AdminTabRegisterRecStyle.css";

class AdminTabRegisterRec extends Component {
  state = {
    type: "password"
  };

  handleClick = () =>
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text"
    }));
  render() {
    return (
      <div className="TabRegisterEmplo">
        <h1>Εγγραφή Γραμματέα</h1>
        <div className="container">
          <table className="table1">
            <tr>
              <th align="left">
                <label>Όνομα</label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
              <th align="left">
                <label>Επώνυμο</label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Ημερ/νια γέννησης</label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
              <th align="left">
                <label>Φύλο </label>
              </th>
              <th align="right">
                <select className="filo">
                  <option value="NoDiet">Άνδρας</option>
                  <option value="BreakfastOnly">Γυναίκα</option>{" "}
                </select>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Διεύθυνση</label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
              <th align="left">
                <label>Πόλη </label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Τηλέφωνο</label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
              <th align="left">
                <label>Α.Μ.Κ.Α. </label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Α.Δ.Τ.</label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
              <th align="left">
                <label>Α.Φ.Μ. </label>
              </th>
              <th align="right">
                <input type="text" />
              </th>
            </tr>
          </table>

          <table className="table2">
            <tr>
              <th>
                <label>Όνομα χρήστη</label>
              </th>
            </tr>
            <tr>
              <th>
                <input type="text" />
              </th>
            </tr>
            <tr>
              <th>
                <label>Κωδικός</label>
              </th>
            </tr>
            <tr>
              <th>
                <input type={this.state.type} />
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
          </table>
        </div>
        <button className="btnAddEmploye">Καταχώρηση</button>
      </div>
    );
  }
}

export default AdminTabRegisterRec;
