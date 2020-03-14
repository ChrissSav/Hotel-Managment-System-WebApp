import React, { Component } from "react";
import "./AdminPageStyle.css";
import AdminTabDBEmployees from "./AdminTabDBEmployees";
import AdminTabDBRooms from "./AdminTabDBRooms";
import AdminTabDBPrices from "./AdminTabDBPrices";
import AdminTabRegisterRec from "./AdminTabRegisterRec";
import AdminTabRegisterRoom from "./AdminTabRegisterRoom";
import axios from "../axios.js";
import cookie from "react-cookies";

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
    this.Logout = this.Logout.bind(this);
  }

  ActiveTab(event) {
    this.setState({
      [this.state.active_tab]: "tab",
      [event.target.id]: "active tab",
      active_tab: event.target.id
    });
  }

  Logout() {
    if (window.confirm("Θέλετε σιγουρά να αποσυνδεθείτε ;")) {
      const refress_token = cookie.load("refress_token");
      axios
        .delete("http://localhost:5023/token_admin", {
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
            <li>
              <button id="logout" className="logout" onClick={this.Logout}>
                Αποσύνδεση
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
