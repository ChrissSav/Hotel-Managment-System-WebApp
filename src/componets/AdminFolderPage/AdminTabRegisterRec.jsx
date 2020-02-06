import React, { Component } from "react";
import "./AdminTabRegisterRecStyle.css";

class AdminTabRegisterRec extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Εγγραφή Γραμματέα</h1>
        <table className="table1">
          <tr>
            <th align="left">
              <label>Όνομα</label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Επώνυμο</label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Ημερ/νια γέννησης</label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
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
              <input type="text" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Πόλη </label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Τηλέφωνο</label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Α.Μ.Κ.Α. </label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Α.Δ.Τ.</label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Α.Φ.Μ. </label>
            </th>
            <th align="right">
              <input type="text" id="fname" name="firstname" readonly />
            </th>
          </tr>
        </table>
        <button className="btnAddEmploye">Καταχώρηση</button>

        <table className="tableUserNamePass">
          <tr>
            <th>
              <label>Όνομα χρήστη</label>
            </th>
          </tr>
          <tr>
            <th>
              <input type="text" id="fname" name="firstname" />
            </th>
          </tr>
          <tr>
            <th>
              <label>Κωδικός</label>
            </th>
          </tr>
          <tr>
            <th>
              <input type="text" id="fname" name="firstname" />
            </th>
          </tr>
          <tr>
            <th>
              <label className="check">
                <input type="checkbox" name="ac" value="ac" />
                Εφμάνιση Κωδικού
              </label>
            </th>
          </tr>
        </table>
      </div>
    );
  }
}

export default AdminTabRegisterRec;
