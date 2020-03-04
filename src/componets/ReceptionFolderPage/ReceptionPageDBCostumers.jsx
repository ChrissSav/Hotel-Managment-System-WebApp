import React, { Component } from "react";
import "./ReceptionPageDBCostumersStyle.css";
import axios from "axios";

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
      // console.log(res.data);
      this.setState({
        costumers: res.data
      });
    });
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
        onClick={() => this.setState({ active: 0 })}
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
            <tbody>{List_of_Employees}</tbody>
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
      </div>
    );
  }
}

export default ReceptionPageDBCostumers;
