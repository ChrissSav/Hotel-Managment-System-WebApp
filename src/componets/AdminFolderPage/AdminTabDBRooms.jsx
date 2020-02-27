import React, { Component } from "react";
import "./AdminTabDBRoomsStyle.css";
import axios from "axios";
import CostumMenu from "../CostumMenu/Menu";

class AdminTabDBRooms extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      rooms: [],
      active: 0,
      top_dist: 0,
      left_dist: 0,
      display: "block",
      show: false
    };

    this.getRooms = this.getRooms.bind(this);
    this.Clear_Check = this.Clear_Check.bind(this);
    this.Show_Menu = this.Show_Menu.bind(this);
    this._handleClckRigth = this._handleClckRigth.bind(this);
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

  Show_Menu(e) {
    if (e.type === "contextmenu") {
      // console.log("Right click");
      console.log(e.nativeEvent);
      const y = e.nativeEvent.pageY;
      const x = e.nativeEvent.pageX;
      const { show } = this.state;
      this.setState({
        show: true,
        top_dist: y,
        left_dist: x
      });
    }
  }
  render() {
    const { rooms } = this.state;
    const ListofRooms = rooms.length ? (
      rooms.map(room => {
        return (
          <tr
            key={room.id}
            id={room.id}
            className={this.state.active === room.id ? "active_row" : ""}
            onClick={() => this.setState({ active: room.id, show: false })}
            onContextMenu={this.Show_Menu}
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

          <input
            type="text"
            onInput={this.getRooms}
            onClick={this.Clear_Check}
          />
        </div>
        {this.state.show && (
          <CostumMenu
            top_dist={this.state.top_dist}
            left_dist={this.state.left_dist}
          />
        )}
        ;
      </div>
    );
  }
}

export default AdminTabDBRooms;
