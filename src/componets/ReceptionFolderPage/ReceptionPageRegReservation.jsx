import React, { Component } from "react";
import "./ReceptionPageRegReservationStyle.css";
import MenuCostumer from "../CostumMenu/MenuCostumer";
import AddCostumer from "../Costumer/AddCostumer";
import DBCostumerToPick from "../Costumer/DBCostumer_To_pick";
import PickRoom from "../PickRoom/PickRoom";
import axios from "../axios.js";

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
      current_costumer: null,
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
      parking_cost: 20,
      diet_cost: 0,
      //for room
      room_type: "Μονόκλινο",
      wifi: "wifi = 'no'",
      pool: "pool = 'no'",
      air_condition: "air_condition = 'no'",

      //costum menus
      show_context_menu: false,
      top_dist: 0,
      left_dist: 0,
      show_select_costumer: false,
      show_add_costumer: false,
      show_pick_room: false,
      filter: null
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.Get_Selected_Costumer = this.Get_Selected_Costumer.bind(this);
    this.Close_Dialog_Edit_Employee = this.Close_Dialog_Edit_Employee.bind(
      this
    );
    this.Close_Dialog_Select_Employee = this.Close_Dialog_Select_Employee.bind(
      this
    );
    this.Show_Pick_Room = this.Show_Pick_Room.bind(this);
    this.Get_Selected_Room = this.Get_Selected_Room.bind(this);
  }
  Close_Dialog_Edit_Employee(e) {
    //console.log("epistrofi", e);
    if (e !== "") {
      this.setState({
        show_add_costumer: false,
        costumer_id: e.first_name + " " + e.first_name,
        current_costumer: e
      });
    } else {
      this.setState({
        show_add_costumer: false
      });
    }
  }

  Close_Dialog_Select_Employee(e) {
    //console.log("epistrofi", e);
    if (e !== "") {
      this.setState({
        show_select_costumer: false,
        costumer_id: e.last_name + " " + e.first_name,
        current_costumer: e
      });
    } else {
      this.setState({
        show_select_costumer: false
      });
    }
  }

  handleChangeInput(event) {
    // console.log(event.target, event.target.value);
    //console.log(event.target.type);
    if (event.target.type === "checkbox") {
      //console.log("1");

      this.setState({
        [event.target.id]: event.target.checked
          ? event.target.id + " = 'yes'"
          : event.target.id + " = 'no'"
      });
    } else {
      //console.log("2");
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  }
  Get_Selected_Costumer(e) {
    //console.log(e);
    if (e === "select") {
      this.setState({
        show_select_costumer: true
      });
    } else if (e === "add") {
      this.setState({ show_add_costumer: true });
    }
  }

  Get_Selected_Room(e) {
    //console.log(e);
    if (e === -1) {
      this.setState({
        show_pick_room: false
      });
    } else {
      this.setState({
        show_pick_room: false,
        room_id: e
      });
    }
  }

  Show_Pick_Room() {
    let final =
      this.state.wifi +
      " and " +
      this.state.pool +
      " and " +
      this.state.air_condition +
      " and type = '" +
      this.state.room_type +
      "'";
    //console.log(final);
    this.setState({ show_pick_room: true, filter: final });
  }
  render() {
    const display_context_menu = this.state.show_context_menu ? (
      <MenuCostumer
        top_dist={this.state.top_dist}
        left_dist={this.state.left_dist}
        select_action={this.Get_Selected_Costumer}
      />
    ) : null;

    const display_add_costumer = this.state.show_add_costumer ? (
      <AddCostumer get_costumer={this.Close_Dialog_Edit_Employee} />
    ) : null;

    const display_select_costumer = this.state.show_select_costumer ? (
      <DBCostumerToPick get_costumer={this.Close_Dialog_Select_Employee} />
    ) : null;

    const display_pick_room = this.state.show_pick_room ? (
      <PickRoom filter={this.state.filter} select={this.Get_Selected_Room} />
    ) : null;

    return (
      <div
        className="ReceptionRe_container"
        onClick={() => {
          this.setState({ show_context_menu: false });
        }}
      >
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
                    id="air_condition"
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
                  id="UpadetCostumer"
                  type="text"
                  readOnly
                  onChange={this.handleChangeInput}
                  value={this.state.costumer_id}
                  onContextMenu={async e => {
                    const y = e.nativeEvent.pageY;
                    const x = e.nativeEvent.pageX;
                    await this.setState({ show_context_menu: false });
                    await this.setState({
                      show_context_menu: true,
                      top_dist: y,
                      left_dist: x
                    });
                  }}
                />
              </th>
              <th align="left">
                <label>Αριθ. Δωματίου</label>
              </th>
              <th align="right" className="wrap_room">
                <input type="room_id" value={this.state.room_id} readOnly />
                <button
                  className="Search_room"
                  onClick={this.Show_Pick_Room}
                ></button>
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
        <button className="btnregBook">Καταχώρηση</button>
        {display_context_menu}
        {display_add_costumer}
        {display_select_costumer}
        {display_pick_room}
      </div>
    );
  }
}

export default ReceptionPageRegReservation;
