import React, { Component } from "react";
import "./AdminTabDBPricesStyle.css";

class AdminTabDBPrices extends Component {
  state = {};
  render() {
    return (
      <div className="Prices">
        <h1>Τιμολόγηση</h1>
        <table className="tableParoxes">
          <tr>
            <th align="left">
              <label className="title">Παροχές Δωματίου</label>
            </th>
            <th align="right">
              <label></label>
            </th>
            <th align="left">
              <label className="title">Διατροφή</label>
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
              <input type="number" readOnly />
            </th>
            <th align="left">
              <label>Μόνο πρωινό</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Πισίνα</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
            <th align="left">
              <label>Ημιδιατροφή</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Wifi</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
            <th align="left">
              <label>Πλήρης διατροφή</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="title">Έξτρα Παροχές</label>
            </th>
            <th align="right">
              <label></label>
            </th>
            <th align="left">
              <label className="title">Δωμάτιο</label>
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
              <input type="number" readOnly />
            </th>
            <th align="left">
              <label>Κανονικό</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="title">Φόρος</label>
            </th>
            <th align="right"></th>
            <th align="left">
              <label>Οικογενιακό</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label>Φ.Π.Α.</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
            <th align="left">
              <label>Τιμή κλίνας</label>
            </th>
            <th align="right">
              <input type="number" readOnly />
            </th>
          </tr>
        </table>
        <button className="btnrcegPrices">Καταχώρηση</button>
      </div>
    );
  }
}

export default AdminTabDBPrices;
