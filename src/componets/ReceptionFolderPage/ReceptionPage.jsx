import React, { Component } from "react";
import "./ReceptionPage1Style.css";
import ReceptionPageDBCostumers from "./ReceptionPageDBCostumers";
import ReceptionPageDBReservations from "./ReceptionPageDBReservations";
import ReceptionPageRegReservation from "./ReceptionPageRegReservation";

class ReceptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegReservation: "active tab",
      DBCostumers: " tab",
      DBReservations: " tab",
      active_tab: "RegReservation"
    };

    this.ActiveTab = this.ActiveTab.bind(this);
  }
  ActiveTab(event) {
    this.setState({
      [this.state.active_tab]: "tab",
      [event.target.id]: "active tab"
    });
    this.state.active_tab = event.target.id;
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
