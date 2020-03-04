import React, { Component } from "react";
import "./ReceptionPageRegReservationStyle.css";

class ReceptionPageRegReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //info
      book_id: "",
      employee_id: "",
      book_date: "",
      room_id: "",
      //booking
      costumer_id: "",
      arrival: "",
      departure: "",
      diet: "",
      num_of_adults: "",
      num_of_minors: "",
      parking: "",
      //cost
      room_cost: "",
      tax: "",
      cost_of_benefits: "",
      cost_total: "",

      //for room
      wifi: "",
      pool: "",
      a_c: ""
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    // console.log(event.target, event.target.value);
    //console.log(event.target.type);
    if (event.target.type == "checkbox") {
      //console.log("1");
      this.setState({
        [event.target.id]: event.target.checked ? "yes" : "no"
      });
    } else {
      //console.log("2");
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  }
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
                <input
                  id="book_id"
                  type="text"
                  value={this.state.book_id}
                  // onChange={this.handleChangeInput}
                  readOnly
                />
              </th>
              <th align="left">
                <label>Κωδικός Γραμματέα</label>
              </th>
              <th align="right">
                <input
                  id="employee_id"
                  type="text"
                  value={this.state.employee_id}
                  //  onChange={this.handleChangeInput}
                  readOnly
                />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Ημερ/νια κράτησης</label>
              </th>
              <th align="right">
                <input
                  id="book_date"
                  type="text"
                  value={this.state.book_date}
                  //  onChange={this.handleChangeInput}
                  readOnly
                />
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
                <input
                  id="arrival"
                  type="date"
                  onChange={this.handleChangeInput}
                />
              </th>
              <th align="left">
                <label>Διατροφή</label>
              </th>
              <th align="right">
                <select
                  id="diet"
                  className="diet"
                  onChange={this.handleChangeInput}
                >
                  <option value="Χωρίς διατροφή">Χωρίς διατροφή</option>
                  <option value="Μόνο πρωινό">Μόνο πρωινό</option>
                  <option value="Ημιδιατροφή">Ημιδιατροφή</option>
                  <option value="Πλήρης διατροφή">Πλήρης διατροφή</option>
                </select>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Αναχώρηση</label>
              </th>
              <th align="right">
                <input
                  id="departure"
                  type="date"
                  onChange={this.handleChangeInput}
                />
              </th>
              <th align="left">
                <label className="check">
                  <input
                    id="a_c"
                    type="checkbox"
                    onChange={this.handleChangeInput}
                  />
                  Κλιματισμός
                </label>
              </th>
              <th align="right">
                <label className="check" id="cc1">
                  <input
                    id="wifi"
                    type="checkbox"
                    onChange={this.handleChangeInput}
                  />{" "}
                  Παροχή Wifi
                </label>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Αρ. Ενηλίκων</label>
              </th>
              <th align="right">
                <input
                  id="num_of_adults"
                  type="number"
                  min="0"
                  onChange={this.handleChangeInput}
                  value={this.state.num_of_adults}
                />
              </th>
              <th align="left">
                <label className="check">
                  <input
                    id="pool"
                    type="checkbox"
                    onChange={this.handleChangeInput}
                  />
                  Πισίνα
                </label>
              </th>
              <th align="right">
                <label className="check" id="cc2">
                  <input
                    id="parking"
                    type="checkbox"
                    onChange={this.handleChangeInput}
                  />
                  Θέση στάθμεσης
                </label>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Αρ. Ανηλίκων</label>
              </th>
              <th align="right">
                <input
                  id="num_of_minors"
                  type="number"
                  min="0"
                  onChange={this.handleChangeInput}
                  value={this.state.num_of_minors}
                />
              </th>
              <th align="left">
                <label>Τύπος δωματίου</label>
              </th>
              <th align="right">
                <select id="room_type" onChange={this.handleChangeInput}>
                  <option value="Μονόκλινο">Μονόκλινο</option>
                  <option value="Δίκλινο">Δίκλινο</option>
                  <option value="Τρίκλινο">Τρίκλινο</option>
                  <option value="Οικογενειακό">Οικογενειακό</option>
                </select>
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Κωδικός Πελάτη</label>
              </th>
              <th align="right">
                <input
                  id="costumer_id"
                  type="text"
                  readOnly
                  onChange={this.handleChangeInput}
                  value={this.state.costumer_id}
                />
              </th>
              <th align="left">
                <label>Αριθ. Δωματίου</label>
              </th>
              <th align="right" className="wrap_room">
                <input type="room_id" value={this.state.room_id} readOnly />
                <button className="Search_room"></button>
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
                <input
                  id="room_cost"
                  type="number"
                  onChange={this.handleChangeInput}
                  value={this.state.room_cost}
                  readOnly
                />
              </th>
              <th align="left">
                <label>Φ.Π.Α.</label>
              </th>
              <th align="right">
                <input
                  id="tax"
                  type="number"
                  onChange={this.handleChangeInput}
                  value={this.state.tax}
                  readOnly
                />
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Κόστος παροχών</label>
              </th>
              <th align="right">
                <input
                  id="cost_of_benefits"
                  type="number"
                  onChange={this.handleChangeInput}
                  value={this.state.cost_of_benefits}
                  readOnly
                />
              </th>
              <th align="left">
                <label>Τελικό Κόστος</label>
              </th>
              <th align="right">
                <input
                  id="cost_total"
                  type="number"
                  value={this.state.cost_total}
                  onChange={this.handleChangeInput}
                  readOnly
                />
              </th>
            </tr>
          </tbody>
        </table>
        <button
          className="btnregBook"
          onClick={() => {
            console.log(this.state);
          }}
        >
          Καταχώρηση
        </button>
      </div>
    );
  }
}

export default ReceptionPageRegReservation;
