import React, { Component } from "react";
import "./AdminTabDBRoomsStyle.css";
import axios from "../axios.js";
import CostumMenu from "../CostumMenu/Menu";
import UpdateRoom from "../Edit_Components/Edit_Room";

class AdminTabDBRooms extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      rooms: [],
      active: 0,
      top_dist: 0,
      left_dist: 0,
      show: false,
      show_edit_room: false,
      curren_room: []
    };

    this.getRooms = this.getRooms.bind(this);
    this.Clear_Check = this.Clear_Check.bind(this);
    this.Get_Selected_Action = this.Get_Selected_Action.bind(this);
    this._handleClckRigth = this._handleClckRigth.bind(this);
    this.Close_Dialog_Edit_Room = this.Close_Dialog_Edit_Room.bind(this);
  }

  getRooms(e) {
    //console.log("e.target.value", e.target.value);
    var id = e.target.value;
    if (e.target.value === "") {
      id = 0;
    }
    axios.get("http://localhost:5023/room/" + id).then(res => {
      // console.log(res.data);
      this.setState({
        rooms: res.data
      });
    });
  }

  componentDidMount() {
    window.addEventListener("contextmenu", this._handleClckRigth);
    axios.get("http://localhost:5023/room/0").then(res => {
      //console.log(res.data);
      this.setState({
        rooms: res.data
      });
    });
  }
  _handleClckRigth(e) {
    e.preventDefault();
  }
  Clear_Check(e) {
    this.setState({
      active: 0,
      show: false
    });
  }

  Get_Selected_Action(id) {
    //console.log("Selected : " + id);
    if (id === "edit") {
      this.setState({
        show_edit_room: true
      });
    }
  }
  Close_Dialog_Edit_Room(e) {
    //console.log("epistrofi", e);
    if (e === 2) {
      axios.get("http://localhost:5023/room/0").then(res => {
        //console.log(res.data);
        this.setState({
          rooms: res.data
        });
      });
    }
    this.setState({
      show_edit_room: false
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
    const display_update_room = this.state.show_edit_room ? (
      <UpdateRoom
        room={this.state.curren_room}
        close_dialog={this.Close_Dialog_Edit_Room}
      />
    ) : null;
    const { rooms } = this.state;
    const ListofRooms = rooms.length
      ? rooms.map(room => {
          return (
            <tr
              key={room.id}
              id={room.id}
              className={this.state.active === room.id ? "active_row" : ""}
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
                    active: room.id,
                    curren_room: room
                  });
                }
              }}
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
        className="DBRooms"
        onClick={() => this.setState({ active: 0, show: false })}
      >
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

          <input
            type="text"
            onInput={this.getRooms}
            onClick={this.Clear_Check}
          />
        </div>
        {display_menu}
        {display_update_room}
      </div>
    );
  }
}

export default AdminTabDBRooms;
