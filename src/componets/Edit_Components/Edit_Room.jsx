import React, { Component } from "react";
import "./Edit_RoomStyle.css";

class Edit_Room extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      id: prop.room.id,
      type: prop.room.type,
      num_of_beds: prop.room.num_of_beds,
      air_condition: prop.room.air_condition,
      pool: prop.room.pool,
      wifi: prop.room.wifi,
      price: prop.room.price
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }
  onKeyPressed(e) {
    if (e.key === "Escape") {
      this.props.close_dialog(1);
    } else if (e === "exit") {
      this.props.close_dialog(2);
    }
  }
  handleChangeInput(event) {
    //console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    return (
      <div
        className="Wrap_Edit_Room"
        onKeyDown={e => {
          this.onKeyPressed(e);
        }}
      >
        <div className="Edit_Room">
          <h1>Επεξεργασία Δωματίου</h1>
          <table className="TableRoom">
            <tbody>
              <tr>
                <th align="left">
                  <label>Κωδικός</label>
                </th>
                <th align="right">
                  <input
                    id="id"
                    type="number"
                    onChange={this.handleChangeInput}
                    value={this.state.id}
                    readOnly
                  />
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Τύπος</label>
                </th>
                <th align="right">
                  <select
                    id="type"
                    onChange={this.handleChangeInput}
                    value={this.state.type}
                  >
                    <option value="Κανονικό">Κανονικό</option>
                    <option value="Οικογενιακό">Οικογενιακό</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Αρ. Κλινών</label>
                </th>
                <th align="right">
                  <input
                    id="num_of_beds"
                    type="number"
                    min="1"
                    value={this.state.num_of_beds}
                    onChange={this.handleChangeInput}
                  />
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Κλιματισμός</label>
                </th>
                <th align="right">
                  <select
                    id="air_condition"
                    onChange={this.handleChangeInput}
                    value={this.state.air_condition}
                  >
                    <option value="ΟΧΙ">ΟΧΙ</option>
                    <option value="ΝΑΙ">ΝΑΙ</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Πισίνα</label>
                </th>
                <th align="right">
                  <select
                    id="pool"
                    onChange={this.handleChangeInput}
                    value={this.state.pool}
                  >
                    <option value="ΟΧΙ">ΟΧΙ</option>
                    <option value="ΝΑΙ">ΝΑΙ</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>WiFi</label>
                </th>
                <th align="right">
                  <select
                    id="wifi"
                    onChange={this.handleChangeInput}
                    value={this.state.wifi}
                  >
                    <option value="ΟΧΙ">ΟΧΙ</option>
                    <option value="ΝΑΙ">ΝΑΙ</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th align="left">
                  <label>Κόστος </label>
                </th>
                <th align="right">
                  <input
                    onChange={this.handleChangeInput}
                    id="price"
                    type="text"
                    readOnly
                    value={this.state.price + "  €"}
                  />
                </th>
              </tr>
            </tbody>
          </table>
          <button
            className="btnAddRoom"
            onClick={() => {
              this.onKeyPressed("exit");
            }}
          >
            Ενημέρωση
          </button>
        </div>
      </div>
    );
  }
}

export default Edit_Room;
