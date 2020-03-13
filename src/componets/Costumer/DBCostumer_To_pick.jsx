import React, { Component } from "react";
import "./DBCostumer_To_pickStyle.css";
import axios from "../axios.js";

class DBCostumer_To_pick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costumers: [],
      active: 0,
      curren_costumer: null
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5023/costumer/!").then(res => {
      //console.log(res.data);
      this.setState({
        costumers: res.data
      });
    });
  }
  onKeyPressed(e) {
    if (e.key === "Escape") {
      this.props.get_costumer("");
    }
  }

  render() {
    const { costumers } = this.state;
    const List_of_Employees = costumers.length ? (
      costumers.map(costumer => {
        return (
          <tr
            key={costumer.id}
            id={costumer.id}
            className={this.state.active === costumer.id ? "active_row" : ""}
            onClick={() =>
              this.setState({ active: costumer.id, curren_costumer: costumer })
            }
          >
            <td>{costumer.first_name}</td>
            <td>{costumer.last_name}</td>
            <td>{costumer.birthday}</td>
            <td>{costumer.sex}</td>
            <td>{costumer.phone}</td>
            <td>{costumer.adt}</td>
          </tr>
        );
      })
    ) : (
      <tr></tr>
    );
    return (
      <div
        className="Wrap_DBCostumer_To_pick"
        tabIndex="0"
        onKeyDown={e => {
          // console.log("jh");
          this.onKeyPressed(e);
        }}
      >
        <div className="DBCostumer_To_pick">
          <h1>Επιλογή Πελάτη</h1>
          <div className="container">
            <table className="table_CostumersDB">
              <thead>
                <tr>
                  <th>Όνομα</th>
                  <th>Επώνυμο</th>
                  <th>Ημερ/νια γέννησης</th>
                  <th>Φύλο</th>
                  <th>Τηλέφωνο</th>
                  <th>Α.Δ.Τ. / Διαβατήριο</th>
                </tr>
              </thead>
              <tbody>{List_of_Employees}</tbody>
            </table>
          </div>
          <button
            className="btnDBCostumer_To_pick"
            onClick={() => {
              if (this.state.curren_costumer == null) {
                this.props.get_costumer("");
              } else {
                this.props.get_costumer(this.state.curren_costumer.id);
              }
            }}
          >
            Επιλογή
          </button>
        </div>
      </div>
    );
  }
}

export default DBCostumer_To_pick;
