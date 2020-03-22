import React, { Component } from "react";
import "./ReceptionPageDBReservationsStyle.css";
import axios from "../axios.js";

class ReceptionPageDBReservations extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      reservations: []
    };
    this.GetAllReservations = this.GetAllReservations.bind(this);
    this.GetReservationsById = this.GetReservationsById.bind(this);
    this.getReservation = this.getReservation.bind(this);
  }

  componentDidMount() {
    this.GetAllReservations();
  }

  GetAllReservations() {
    axios.get("http://localhost:5023/reservation/0").then(res => {
      //console.log(res.data);
      this.setState({
        reservations: res.data
      });
    });
  }

  GetReservationsById(id) {
    console.log(id, "id");
    axios.get("http://localhost:5023/reservation/" + id).then(res => {
      //console.log(res.data);
      this.setState({
        reservations: res.data
      });
    });
  }

  getReservation(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.GetAllReservations();
    } else {
      this.GetReservationsById(e.target.value);
    }
  }
  render() {
    const { reservations } = this.state;
    const List_of_Reservations = reservations.length ? (
      reservations.map(reservation => {
        return (
          <tr key={reservation.id} id={reservation.id}>
            <td>{reservation.id}</td>
            <td>{reservation.date}</td>
            <td>{reservation.rec_id}</td>
            <td>{reservation.costumer_id}</td>
            <td>{reservation.room_id}</td>
            <td>{reservation.arrival}</td>
            <td>{reservation.departure}</td>
            <td>{reservation.num_of_adults}</td>
            <td>{reservation.num_of_minors}</td>
            <td>{reservation.parking_space}</td>
            <td>{reservation.diet}</td>
            <td>{reservation.cost} €</td>
          </tr>
        );
      })
    ) : (
      <tr></tr>
    );
    return (
      <div className="DBReservations_container">
        <h1>Κατάλογος Κρατήσεων</h1>
        <div className="wrap_table">
          <table className="table_DBReservations">
            <thead>
              <tr>
                <th>Κωδικός</th>
                <th>Ημερ/νια</th>
                <th>Κωδ Υπαλλήλου</th>
                <th>Κωδ Πελάτη</th>
                <th>Αρ Δωματίου</th>
                <th>Άφιξη</th>
                <th>Αναχώρηση</th>
                <th>Αρ Ενηλίκων</th>
                <th>Αρ Ανηλίκων</th>
                <th>Θέση Στάθμευσης</th>
                <th>Διατροφή</th>
                <th>Κόστος</th>
              </tr>
            </thead>
            <tbody>{List_of_Reservations}</tbody>
          </table>
        </div>
        <div className="SearchReserverion">
          <label>Αναζήτηση με βάση τον κωδικό κράτησης ή πελάτη</label>
          <br></br>

          <input type="text" onInput={this.getReservation} />
        </div>
      </div>
    );
  }
}

export default ReceptionPageDBReservations;
