import React, { Component } from "react";
import "./ReceptionPageRegReservationStyle.css";
import MenuCostumer from "../CostumMenu/MenuCostumer";
import AddCostumer from "../Costumer/AddCostumer";
import DBCostumerToPick from "../Costumer/DBCostumer_To_pick";
import PickRoom from "../PickRoom/PickRoom";
import axios from "../axios.js";
import cookie from "react-cookies";

class ReceptionPageRegReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //info
      book_id: "",
      employee_id: "",
      book_date: "",
      room_id: "",
      current_room: null,
      //booking
      costumer_id: "",
      current_costumer: null,
      arrival: undefined,
      departure: undefined,
      diet: "without_diet",
      num_of_adults: "",
      num_of_minors: "",
      parking: "",
      //cost
      room_cost: 0,
      cost_of_benefits: 0,
      cost_total: 0,
      cost_tax: 0,
      parking_cost: 0,
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
      filter: null,

      //costs from api
      tax: 0,
      parking_cost_api: null,
      without_diet: 0,
      only_breakfast: null,
      half_board: null,
      full_diet: null
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.getPricesFromApi = this.getPricesFromApi.bind(this);
    this.Get_Selected_Costumer = this.Get_Selected_Costumer.bind(this);
    this.Close_Dialog_Add_Employee = this.Close_Dialog_Add_Employee.bind(this);
    this.Close_Dialog_Select_Employee = this.Close_Dialog_Select_Employee.bind(
      this
    );
    this.Show_Pick_Room = this.Show_Pick_Room.bind(this);
    this.Get_Selected_Room = this.Get_Selected_Room.bind(this);
    this.totalCostCal = this.totalCostCal.bind(this);
    this.checkFieldsroReg = this.checkFieldsroReg.bind(this);
    this.CheckArrivalAndDeparture = this.CheckArrivalAndDeparture.bind(this);
    this.CheckTheConstituents = this.CheckTheConstituents.bind(this);
  }

  totalCostCal() {
    let room_cost = this.state.room_cost;
    let cost_of_benefits = this.state.diet_cost + this.state.parking_cost;
    const total = room_cost + cost_of_benefits;
    //console.log("totalCostCal", room_cost, cost_of_benefits);
    let tax = 0;
    if (total !== 0) {
      tax = (total * this.state.tax).toFixed(2);
    }
    //console.log(tax, "total", total);
    this.setState({
      cost_total: total,
      cost_tax: tax,
      cost_of_benefits: cost_of_benefits
    });
  }

  componentDidMount() {
    var today = new Date(),
      date =
        today.getHours() +
        "" +
        today.getMinutes() +
        "" +
        today.getSeconds() +
        "" +
        today.getDate() +
        "" +
        (today.getMonth() + 1) +
        "" +
        today.getFullYear();
    this.getPricesFromApi();

    this.setState({
      book_id: date,
      employee_id: this.parseJwt(cookie.load("refress_token")).user.id
    });
    //console.log(this.state);
  }

  getPricesFromApi() {
    axios.get("http://localhost:5023/prices/reception").then(res => {
      let result = res.data;

      if (result.status === "success") {
        result = result.msg;

        //console.log(result);
        this.setState({
          parking_cost_api: result.parking,
          only_breakfast: result.only_breakfast,
          half_board: result.half_board,
          full_diet: result.full_diet,
          tax: result.tax / 100
        });
      }
      // console.log(res.data);
    });
  }
  parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  Close_Dialog_Add_Employee(e) {
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

  async handleChangeInput(event) {
    //console.log(event.target, event.target.value);
    if (event.target.type === "checkbox") {
      if (event.target.id === "parking") {
        const parking_cost_api = this.state.parking_cost_api;
        //console.log(ben);
        await this.setState({
          parking_cost: event.target.checked ? parking_cost_api : 0
        });
      } else {
        this.setState({
          [event.target.id]: event.target.checked
            ? event.target.id + " = 'yes'"
            : event.target.id + " = 'no'"
        });
      }
    } else {
      //console.log("2", event.target.type);
      this.setState({
        [event.target.id]: event.target.value
      });
      if (event.target.type === "select-one") {
        if (event.target.id === "diet") {
          const item = event.target.value;
          await this.setState({
            diet_cost: this.state[item]
          });
        }
      }
    }

    this.totalCostCal();
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

  async Get_Selected_Room(e) {
    //console.log(e);
    if (e === -1) {
      this.setState({
        show_pick_room: false
      });
    } else {
      await this.setState({
        show_pick_room: false,
        room_id: e.id,
        room_cost: e.price,
        current_room: e
      });
      this.totalCostCal();
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

  // arrival: "",
  // departure: "",
  // diet: "",
  // num_of_adults: "",
  // num_of_minors: "",
  checkFieldsroReg() {
    /* const arrival = this.state.arrival;
    const departure = this.state.departure;
    const num_of_adults = this.state.num_of_adults;
    const num_of_minors = this.state.num_of_minors;
    const costumer = this.state.current_costumer;
    const room = this.state.current_room;
    const diet = this.state.diet;
    const parking = this.state.parking_cost;*/

    /*console.log(
      "arrival",
      arrival,
      "\ndeparture",
      departure,
      "\nnum_of_adults",
      num_of_adults,
      "\nnum_of_minors",
      num_of_minors,
      "\ndiet",
      diet,
      "\ncostumer",
      costumer,
      "\nroom",
      room,
      "\nparking",
      parking
    );*/ //&& this.CheckArrivalAndDeparture()
    //CheckRoomAndCostumer this.CheckArrivalAndDeparture() && this.CheckTheConstituents() && this.CheckRoomAndCostumer()
    if (
      this.CheckRecInfo() &&
      this.CheckArrivalAndDeparture() &&
      this.CheckTheConstituents() &&
      this.CheckRoomAndCostumer()
    ) {
      console.log("ok");
    } else {
      console.log("lathos");
    }
  }

  CheckArrivalAndDeparture() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var flag = false;
    today = mm + "/" + dd + "/" + yyyy;
    let arrival = this.state.arrival;
    let departure = this.state.departure;
    //console.log(departure, "departure");
    if (arrival === undefined || arrival === "") {
      alert("Κενη ημερ/νια αφιξης");
      flag = false;
      //console.log("kenom ariv");
    } else if (arrival !== undefined && arrival !== "") {
      //console.log("oxi keno ariv");
      arrival = this.ChangeFormatTocheck(arrival);
      flag = true;
      if (this.CheckDiffBetweenDates(today, arrival, 0)) {
        //console.log("ok ariv");
        if (departure !== undefined && departure !== "") {
          departure = this.ChangeFormatTocheck(departure);
          const res = this.CheckDiffBetweenDates(arrival, departure, 1);
          if (res) {
            flag = true;
          } else {
            alert("Λαθος ημερ/νια αναχωρησης");
            flag = false;
          }
        }
      } else {
        //console.log("error today ariv");
        alert("Λαθος ημερ/νια αφιξης");
        flag = false;
      }
    }

    //console.log("\n\nflag", flag);
    //this.CheckDiffBetweenDates(date, "08/10/2010");
  }

  CheckDiffBetweenDates(date11, date22, num) {
    //yyyy/dd/mm
    //date11 = this.ChangeFormatTocheck(date11);
    // date22 = this.ChangeFormatTocheck(date22);
    //console.log(date11, date22);
    //mm/dd/yyyy
    var date1 = new Date(date11);
    var date2 = new Date(date22);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
    //console.log(date11, date22, diffDays);
    return diffDays >= num ? true : false;
  }

  ChangeFormatTocheck(date1) {
    //console.log(date1);
    const new_date =
      date1[5] +
      date1[6] +
      "/" +
      date1[8] +
      date1[9] +
      "/" +
      date1[0] +
      date1[1] +
      date1[2] +
      date1[3];
    //console.log(date1, "\n" + new_date);
    return new_date;
  }

  CheckTheConstituents() {
    const num_of_adults = this.state.num_of_adults;
    const num_of_minors = this.state.num_of_minors;

    if (
      (num_of_adults < 1 || num_of_adults === "") &&
      (num_of_minors < 1 || num_of_minors === "")
    ) {
      alert("ελεξγε τους απαρτίζοντες");
      return false;
    } else {
      return true;
    }
  }

  CheckRoomAndCostumer() {
    const costumer = this.state.current_costumer;
    const room = this.state.current_room;
    if (costumer !== null) {
      if (room !== null) {
        return true;
      } else {
        alert("ελεξγε το δωματιο");
        return false;
      }
    } else {
      alert("ελεξγε τον πελατη");
      return false;
    }
  }
  CheckRecInfo() {
    const rec = this.state.employee_id;
    const book_date = this.state.book_date;
    if (rec !== null) {
      if (book_date !== null) {
        return true;
      } else {
        alert("Ελεξτε τα πεδια");
        return false;
      }
    } else {
      alert("Κατι πηγε στραβα");
      return false;
    }
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
      <AddCostumer get_costumer={this.Close_Dialog_Add_Employee} />
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
                  <option value="without_diet">Χωρίς διατροφή</option>
                  <option value="only_breakfast">Μόνο πρωινό</option>
                  <option value="half_board">Ημιδιατροφή</option>
                  <option value="full_diet">Πλήρης διατροφή</option>
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
                  type="text"
                  onChange={this.handleChangeInput}
                  value={this.state.room_cost}
                  readOnly
                />
                €
              </th>
              <th align="left">
                <label>Φ.Π.Α.</label>
              </th>
              <th align="right">
                <input
                  id="cost_tax"
                  type="text"
                  onChange={this.handleChangeInput}
                  value={this.state.cost_tax}
                  readOnly
                />
                €
              </th>
            </tr>
            <tr>
              <th align="left">
                <label>Κόστος παροχών</label>
              </th>
              <th align="right">
                <input
                  id="cost_of_benefits"
                  type="text"
                  onChange={this.handleChangeInput}
                  value={this.state.cost_of_benefits}
                  readOnly
                />
                €
              </th>
              <th align="left">
                <label>Τελικό Κόστος</label>
              </th>
              <th align="right">
                <input
                  id="cost_total"
                  className="makis"
                  type="text"
                  value={this.state.cost_total}
                  onChange={this.handleChangeInput}
                  readOnly
                />
                €
              </th>
            </tr>
          </tbody>
        </table>
        <button className="btnregBook" onClick={this.checkFieldsroReg}>
          Καταχώρηση
        </button>
        {display_context_menu}
        {display_add_costumer}
        {display_select_costumer}
        {display_pick_room}
      </div>
    );
  }
}

export default ReceptionPageRegReservation;
