import React, { Component, useEffect } from "react";
import "./AdminPageStyle.css";
import AdminTabDBEmployees from "./AdminTabDBEmployees";
import AdminTabDBRooms from "./AdminTabDBRooms";
import AdminTabDBPrices from "./AdminTabDBPrices";
import AdminTabRegisterRec from "./AdminTabRegisterRec";
import AdminTabRegisterRoom from "./AdminTabRegisterRoom";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddReception: "active tab",
      AddRoom: " tab",
      ReceptionDB: " tab",
      RoomsDB: " tab",
      Prices: " tab",
      active_tab: "AddReception"
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
      <div className="AdminPage_container">
        <nav>
          <ul className="tabs">
            <li>
              <button
                id="AddReception"
                data-tab-target="#AddReception"
                className={this.state.AddReception}
                onClick={this.ActiveTab}
              >
                Εγγραφή Γραμματέα
              </button>
            </li>
            <li>
              <button
                id="AddRoom"
                data-tab-target="#AddRoom"
                className=" tab"
                className={this.state.AddRoom}
                onClick={this.ActiveTab}
              >
                Καταχώρηση Δωματίου
              </button>
            </li>
            <li>
              <button
                id="ReceptionDB"
                data-tab-target="#ReceptionDB"
                className="tab"
                className={this.state.ReceptionDB}
                onClick={this.ActiveTab}
              >
                Β/Δ Υπαλλήλων
              </button>
            </li>
            <li>
              <button
                id="RoomsDB"
                data-tab-target="#RoomsDB"
                className="tab"
                className={this.state.RoomsDB}
                onClick={this.ActiveTab}
              >
                Β/Δ Δωματίων
              </button>
            </li>

            <li>
              <button
                id="Prices"
                data-tab-target="#Prices"
                className="tab"
                className={this.state.Prices}
                onClick={this.ActiveTab}
              >
                Τιμολόγηση
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <div data-tab-content className={this.state.AddReception}>
            <AdminTabRegisterRec />
          </div>
          <div data-tab-content className={this.state.AddRoom}>
            <AdminTabRegisterRoom />
          </div>
          <div data-tab-content className={this.state.ReceptionDB}>
            <AdminTabDBEmployees />
          </div>
          <div data-tab-content className={this.state.RoomsDB}>
            <AdminTabDBRooms />
          </div>
          <div data-tab-content className={this.state.Prices}>
            <AdminTabDBPrices />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
