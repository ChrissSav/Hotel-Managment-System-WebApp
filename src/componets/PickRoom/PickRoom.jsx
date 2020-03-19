import React, { Component } from "react";
import "./PickRoomStyle.css";
import axios from "../axios.js";

class PickRoom extends Component {
  constructor(props) {
    //console.log("pros", props);
    super(props);
    this.state = {
      rooms: [],
      filters: props.filter,
      active: -1,
      curren_room: null
    };

    this.Selected_Room = this.Selected_Room.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5023/room/topick/" + this.state.filters)
      .then(res => {
        //console.log(res.data);
        this.setState({
          rooms: res.data
        });
      });
  }

  Selected_Room() {
    if (this.state.curren_room === null) {
      this.props.select(-1);
    } else {
      this.props.select(this.state.curren_room);
    }
  }

  render() {
    const { rooms } = this.state;
    const ListofRooms = rooms.length
      ? rooms.map(room => {
          return (
            <tr
              key={room.id}
              id={room.id}
              className={this.state.active === room.id ? "active_row" : ""}
              onClick={() =>
                this.setState({ active: room.id, curren_room: room })
              }
            >
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>{room.num_of_beds}</td>
              <td>{room.air_condition}</td>
              <td>{room.pool}</td>
              <td>{room.wifi}</td>
              <td>{room.price} €</td>
            </tr>
          );
        })
      : null;

    return (
      <div
        className="Wrap_DB_Rooms_To_pick"
        onMouseDown={e => {
          if (e.button === 1) {
            e.preventDefault();
            this.Selected_Room();
          }
        }}
      >
        <div className="DBRoom_To_pick">
          <h1>Επιλογή Δωματίου</h1>
          <div className="container">
            <table className="table_RoomsDB">
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
          <button className="btnDBRoom_To_pick" onClick={this.Selected_Room}>
            Επιλογή
          </button>
        </div>
      </div>
    );
  }
}

export default PickRoom;
