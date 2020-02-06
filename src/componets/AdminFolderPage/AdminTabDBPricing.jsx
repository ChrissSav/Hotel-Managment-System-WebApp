import React, { Component } from "react";

class AdminTabDBPricing extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Τιμολόγηση</h1>
        <table className="tableParoxes">
          <tr>
            <th align="left">
              <label>Παροχές Δωματίου</label>
            </th>
            <th align="right">
              <label></label>
            </th>
            <th align="left">
              <label>Διατροφή</label>>
            </th>
            <th align="right">
              <label></label>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Κλιματισμός</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Μόνο πρωινό</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Πισίνα</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Ημιδιατροφή</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Wifi</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Πλήρης διατροφή</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Έξτρα Παροχές</label>
            </th>
            <th align="right">
              <label></label>
            </th>
            <th align="left">
              <label>Δωμάτιο</label>
            </th>
            <th align="right">
              <label></label>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Θέση στάθμευσης</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Κανονικό</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Φόρος</label>
            </th>
            <th align="right"></th>
            <th align="left">
              <label>Οικογενιακό</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Φ.Π.Α.</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
            <th align="left">
              <label>Τιμή κλίνας</label>
            </th>
            <th align="right">
              <input type="number" id="fname" name="firstname" readonly />
            </th>
          </tr>
        </table>
        <button classNameName="btnregPrices">Καταχώρηση</button>
      </div>
    );
  }
}

export default AdminTabDBPricing;
