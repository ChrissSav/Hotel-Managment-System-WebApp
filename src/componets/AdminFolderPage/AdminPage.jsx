import React, { Component } from "react";
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
      AddReception: " tab",
      AddRoom: "active tab",
      ReceptionDB: " tab",
      RoomsDB: " tab",
      Prices: " tab",
      active_tab: "AddRoom"
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
                className={this.state.AddReception}
                onClick={this.ActiveTab}
              >
                Καταχώρηση Γραμματέα
              </button>
            </li>
            <li>
              <button
                id="AddRoom"
                className={this.state.AddRoom}
                onClick={this.ActiveTab}
              >
                Καταχώρηση Δωματίου
              </button>
            </li>
            <li>
              <button
                id="ReceptionDB"
                className={this.state.ReceptionDB}
                onClick={this.ActiveTab}
              >
                Β/Δ Υπαλλήλων
              </button>
            </li>
            <li>
              <button
                id="RoomsDB"
                className={this.state.RoomsDB}
                onClick={this.ActiveTab}
              >
                Β/Δ Δωματίων
              </button>
            </li>

            <li>
              <button
                id="Prices"
                className={this.state.Prices}
                onClick={this.ActiveTab}
              >
                Τιμολόγηση
              </button>
            </li>
          </ul>
        </nav>
        <div className="Views">
          <div className={this.state.AddReception}>
            <AdminTabRegisterRec />
          </div>
          <div className={this.state.AddRoom}>
            <AdminTabRegisterRoom />
          </div>
          <div className={this.state.ReceptionDB}>
            <AdminTabDBEmployees />
          </div>
          <div className={this.state.RoomsDB}>
            <AdminTabDBRooms />
          </div>
          <div className={this.state.Prices}>
            <AdminTabDBPrices />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
