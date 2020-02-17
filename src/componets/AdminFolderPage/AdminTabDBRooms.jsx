import React, { Component } from "react";
import "./AdminTabDBRoomsStyle.css";
import axios from "axios";

class AdminTabDBRooms extends Component {
  state = {
    rooms: [],
    active: 0
  };

  getRooms = e => {
    console.log("e.target.value", e.target.value);
    var id = e.target.value;
    if (e.target.value == "") {
      id = 0;
    }
    axios.get("http://localhost:5023/room/" + id).then(res => {
      // console.log(res.data);
      this.setState({
        rooms: res.data
      });
    });
  };

  componentDidMount() {
    axios.get("http://localhost:5023/room/0").then(res => {
      // console.log(res.data);
      this.setState({
        rooms: res.data
      });
    });
  }

  render() {
    const { rooms } = this.state;
    const ListofRooms = rooms.length ? (
      rooms.map(room => {
        return (
          <tr
            id={room.id}
            className={this.state.active === room.id ? "active_row" : ""}
            onClick={() => this.setState({ active: room.id })}
          >
            <td>{room.id}</td>
            <td>{room.type}</td>
            <td>{room.num_of_beds}</td>
            <td>{room.air_condition}</td>
            <td>{room.pool}</td>
            <td>{room.wifi} WIFI</td>
            <td>{room.price} €</td>
          </tr>
        );
      })
    ) : (
      <tr></tr>
    );

    return (
      <div className="DBRooms">
        <h1>Β/Δ Δωματίων</h1>
        <div className="wrap_table">
          <table className="Table_RoomsDB">
            <thead>
              <tr>
                <th>Κωδικός</th>
                <th>Τύπος</th>
                <th>Αρ κλινών</th>
                <th>Κλιματισμός</th>
                <th>Πισίνα</th>
                <th>Παροχή WiFi</th>
                <th>Τιμή</th>
              </tr>
            </thead>
            <tbody>{ListofRooms}</tbody>
          </table>
        </div>
        <div className="RoomsSearch">
          <label>Αναζήτηση με βάση τον κωδικό του Δωματίου</label>
          <br></br>

          <input type="text" input={this.state.text} onInput={this.getRooms} />
        </div>
      </div>
    );
  }
}

export default AdminTabDBRooms;
