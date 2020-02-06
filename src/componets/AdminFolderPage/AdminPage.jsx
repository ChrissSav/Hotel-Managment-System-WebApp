import React, { Component } from "react";
import "./AdminPageStyle.css";
import AdminTabDBEmployees from "./AdminTabDBEmployees";
import AdminTabDBRooms from "./AdminTabDBRooms";
import AdminTabDBPricing from "./AdminTabDBPricing";
import AdminTabRegisterRec from "./AdminTabRegisterRec";
import AdminTabRegisterRoom from "./AdminTabRegisterRoom";

class AdminPage extends Component {
  state = {};

  TabHandle() {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  }
  render() {
    return (
      <div>
        <nav>
          <ul className="tabs">
            <li>
              <button data-tab-target="#AddReception" className="active tab">
                Εγγραφή Γραμματέα
              </button>
            </li>
            <li>
              <button data-tab-target="#AddRoom" className=" tab">
                Καταχώρηση Δωματίου
              </button>
            </li>
            <li>
              <button data-tab-target="#ReceptionDB" className="tab">
                Β/Δ Υπαλλήλων
              </button>
            </li>
            <li>
              <button data-tab-target="#RoomsDB" className="tab">
                Β/Δ Δωματίων
              </button>
            </li>

            <li>
              <button data-tab-target="#Prices" className="active tab">
                Τιμολόγηση
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AdminPage;
