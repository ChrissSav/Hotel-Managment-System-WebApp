import React, { Component } from "react";
import "./ReceptionPage1Style.css";
import ReceptionPageDBCostumers from "./ReceptionPageDBCostumers";
import ReceptionPageDBReservations from "./ReceptionPageDBReservations";
import ReceptionPageRegReservation from "./ReceptionPageRegReservation";
import axios from "../axios.js";
import cookie from "react-cookies";

class ReceptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegReservation: "active tab",
      DBCostumers: " tab",
      DBReservations: " tab",
      active_tab: "RegReservation"
    };
    this._handleClckRigth = this._handleClckRigth.bind(this);
    this.ActiveTab = this.ActiveTab.bind(this);
    this.Logout = this.Logout.bind(this);
  }
  ActiveTab(event) {
    this.setState({
      [this.state.active_tab]: "tab",
      [event.target.id]: "active tab",
      active_tab: event.target.id
    });
  }
  componentDidMount() {
    window.addEventListener("contextmenu", this._handleClckRigth);
  }
  _handleClckRigth(e) {
    e.preventDefault();
  }

  Logout() {
    if (window.confirm("Θέλετε σιγουρά να αποσυνδεθείτε ;")) {
      const refress_token = cookie.load("refress_token");
      axios
        .delete("http://localhost:5023/token_reception", {
          refress_token: refress_token
        })
        .then(res => {
          console.log(res);
          const result = res.data;
          if (result.status === "success") {
            this.delete_all_cookies();
          }
        });
    }
  }

  delete_all_cookies() {
    const list_of_cookies = Object.keys(cookie.loadAll());
    let item;
    for (item in list_of_cookies) {
      cookie.remove(list_of_cookies[item], { path: "/" });
    }
    window.location.href = "/";
  }
  render() {
    return (
      <div className="ReceptionPage_container">
        <nav>
          <ul className="tabs">
            <li>
              <button
                id="RegReservation"
                className={this.state.RegReservation}
                onClick={this.ActiveTab}
              >
                Καταχώρηση κράτησης
              </button>
            </li>
            <li>
              <button
                id="DBCostumers"
                className={this.state.DBCostumers}
                onClick={this.ActiveTab}
              >
                Κατάλογος Πελατών
              </button>
            </li>
            <li>
              <button
                id="DBReservations"
                className={this.state.DBReservations}
                onClick={this.ActiveTab}
              >
                Κατάλογος Κρατήσεων
              </button>
            </li>
            <li>
              <button id="logout" className="logout" onClick={this.Logout}>
                Αποσύνδεση
              </button>
            </li>
          </ul>
        </nav>
        <div className="Views">
          <div className={this.state.RegReservation}>
            <ReceptionPageRegReservation />
          </div>
          <div className={this.state.DBCostumers}>
            <ReceptionPageDBCostumers />
          </div>
          <div className={this.state.DBReservations}>
            <ReceptionPageDBReservations />
          </div>
        </div>
      </div>
    );
  }
}

export default ReceptionPage;
