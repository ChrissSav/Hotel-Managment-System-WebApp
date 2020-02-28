import React, { Component } from "react";
import "./ReceptionPageRegReservationStyle.css";
class ReceptionPageRegReservation extends Component {
  state = {};
  render() {
    return (
      <div className="ReceptionRe_container">
        <h1>Καταχώρηση Κράτησης</h1>
        <table className="table_reception_info">
          <tbody>
            <tr>
              <th align="left">
                <label>Κωδικός κράτησης</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
              <th align="left">
                <label>Κωδικός Γραμματέα</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Ημερ/νια κράτησης</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
              <th align="left">
                <label></label>
              </th>
              <th align="right">
                <label></label>
              </th>
            </tr>
          </tbody>
        </table>
        <table className="table_reservation_info">
          <tbody>
            <tr>
              <th align="left">
                <label>Άφιξη</label>
              </th>
              <th align="right">
                <input type="date" />
              </th>
              <th align="left">
                <label>Διατροφή</label>
              </th>
              <th align="right">
                <select className="diet">
                  <option value="NoDiet">Χωρίς διατροφή</option>
                  <option value="BreakfastOnly">Μόνο πρωινό</option>
                  <option value="HalfBoard">Ημιδιατροφή</option>
                  <option value="FullDiet">Πλήρης διατροφή</option>
                </select>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Αναχώρηση</label>
              </th>
              <th align="right">
                <input type="date" />
              </th>
              <th align="left">
                <label className="check">
                  <input type="checkbox" /> Κλιματισμός
                </label>
              </th>
              <th align="right">
                <label className="check" id="cc1">
                  <input type="checkbox" /> Παροχή WIFI
                </label>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Αρ. Ενηλίκων</label>
              </th>
              <th align="right">
                <input type="number" min="0" />
              </th>
              <th align="left">
                <label className="check">
                  <input type="checkbox" name="checkbox" value="pool" /> Πισίνα
                </label>
              </th>
              <th align="right">
                <label className="check" id="cc2">
                  <input type="checkbox" name="parking" value="parking" /> Θέση
                  στάθμεσης
                </label>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Αρ. Ανηλίκων</label>
              </th>
              <th align="right">
                <input type="number" min="0" />
              </th>
              <th align="left">
                <label>Τύπος δωματίου</label>
              </th>
              <th align="right">
                <select>
                  <option value="Single">Μονόκλινο</option>
                  <option value="Double">Δίκλινο</option>
                  <option value="Triple">Τρίκλινο</option>
                  <option value="Family">Οικογενειακό</option>
                </select>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Κωδικός Πελάτη</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
              <th align="left">
                <label>Αριθ. Δωματίου</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
            </tr>
          </tbody>
        </table>
        <table className="table_cost_info">
          <tbody>
            <tr>
              <th align="left">
                <label>Κόστος δωματίου</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
              <th align="left">
                <label>Φ.Π.Α.</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Κόστος παροχών</label>
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
              <th align="left">
                <label>Τελικό Κόστος</label>{" "}
              </th>
              <th align="right">
                <input type="text" readOnly />
              </th>
            </tr>
          </tbody>
        </table>
        <button className="btnregBook">Καταχώρηση</button>
      </div>
    );
  }
}

export default ReceptionPageRegReservation;
