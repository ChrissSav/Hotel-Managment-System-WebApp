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
              <label className="dec">Κλιματισμός</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
            <th align="left">
              <label className="dec">Μόνο πρωινό</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Πισίνα</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
            <th align="left">
              <label className="dec">Ημιδιατροφή</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Wifi</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
            <th align="left">
              <label className="dec">Πλήρης διατροφή</label>
            </th>
            <th align="right">
              <input type="number" />
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
              <label className="dec">Θέση στάθμευσης</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
            <th align="left">
              <label className="dec">Κανονικό</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="title">Φόρος</label>
            </th>
            <th align="right"></th>
            <th align="left">
              <label className="dec">Οικογενιακό</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Φ.Π.Α.</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
            <th align="left">
              <label className="dec">Τιμή κλίνας</label>
            </th>
            <th align="right">
              <input type="number" />
            </th>
          </tr>
        </table>
        <button className="btnrcegPrices">Καταχώρηση</button>
      </div>
    );
  }
}

export default AdminTabDBPrices;
