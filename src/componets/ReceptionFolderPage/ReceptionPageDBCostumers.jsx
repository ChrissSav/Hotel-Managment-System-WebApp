import React, { Component } from "react";
import "./ReceptionPageDBCostumersStyle.css";
import CostumMenu from "../CostumMenu/Menu";
import Edit_Costumer from "../Edit_Components/Edit_Costumer";

//import axios from "axios";
import axios from "../axios.js";

class ReceptionPageDBCostumers extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      costumers: [],
      active: 0,
      top_dist: 0,
      left_dist: 0,
      show: false,
      show_edit_costumer: false,
      curren_costumer: []
    };
    this.getCostumer = this.getCostumer.bind(this);
    this.Clear_Check = this.Clear_Check.bind(this);
    this.Get_Selected_Action = this.Get_Selected_Action.bind(this);
    this.Close_Dialog_Edit_Costumer = this.Close_Dialog_Edit_Costumer.bind(
      this
    );
  }
  componentDidMount() {
    axios.get("http://localhost:5023/costumer/!").then(res => {
      //console.log(res.data);
      this.setState({
        costumers: res.data
      });
    });
  }

  getCostumer(e) {
    var id = e.target.value;
    if (e.target.value === "") {
      id = "!";
    }
    axios.get("http://localhost:5023/costumer/" + id).then(res => {
      //console.log(res.data);
      this.setState({
        costumers: res.data
      });
    });
  }

  Clear_Check() {
    this.setState({
      active: 0,
      show: false
    });
  }
  Get_Selected_Action(id) {
    //console.log("Selectedd : " + id);
    if (id === "edit") {
      this.setState({
        show_edit_costumer: true
      });
    }
  }

  Close_Dialog_Edit_Costumer(e) {
    //console.log("epistrofi", e);
    if (e === 2) {
      //console.log("epistrofi", e);
      axios.get("http://localhost:5023/Costumer/!").then(res => {
        //console.log(res.data);
        this.setState({
          costumers: res.data
        });
      });
    }
    this.setState({
      show_edit_costumer: false
    });
  }

  render() {
    const display_menu = this.state.show ? (
      <CostumMenu
        top_dist={this.state.top_dist}
        left_dist={this.state.left_dist}
        select_action={this.Get_Selected_Action}
      />
    ) : null;
    const display_update_costumer = this.state.show_edit_costumer ? (
      <Edit_Costumer
        costumer={this.state.curren_costumer}
        close_dialog={this.Close_Dialog_Edit_Costumer}
      />
    ) : null;
    const { costumers } = this.state;
    const List_of_Costumers = costumers.length ? (
      costumers.map(costumer => {
        return (
          <tr
            key={costumer.id}
            id={costumer.id}
            className={this.state.active === costumer.id ? "active_row" : ""}
            onClick={() => this.setState({ active: 0, show: false })}
            onContextMenu={async e => {
              if (e.type === "contextmenu") {
                const y = e.nativeEvent.pageY;
                const x = e.nativeEvent.pageX;
                await this.setState({ active: 0, show: false });
                await this.setState({
                  show: true,
                  top_dist: y,
                  left_dist: x,
                  active: costumer.id,
                  curren_costumer: costumer
                });
              }
            }}
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
        className="DBCostumers_container"
        onClick={() => this.setState({ active: 0, show: false })}
      >
        <h1>Κατάλογος Πελατών</h1>
        <div className="wrap_table">
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
            <tbody>{List_of_Costumers}</tbody>
          </table>
        </div>
        <div
          className="CostumerSearch"
          onClick={() => this.setState({ active: 0 })}
        >
          <label>Αναζήτηση με βάση Επώνυμο ή Τηλέφωνο</label>
          <br></br>
          <input type="text" onInput={this.getCostumer} />
        </div>
        {display_menu}
        {display_update_costumer}
      </div>
    );
  }
}

export default ReceptionPageDBCostumers;
