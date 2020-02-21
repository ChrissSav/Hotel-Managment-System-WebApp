import React, { Component } from "react";
import "./AdminTabDBPricesStyle.css";
import axios from "axios";

class AdminTabDBPrices extends Component {
  constructor() {
    super();
    this.state = {
      air_condition: 0,
      pool: 0,
      wifi: 0,
      only_breakfast: 0,
      half_board: 0,
      full_diet: 0,
      parking: 0,
      normal: 0,
      family: 0,
      price_of_bed: 0,
      tax: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    //this.GetdateFromAPi = this.GetdateFromAPi.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    this.updatePrices();
  }

  updatePrices() {
    const prices = this.state;
    axios.put("http://localhost:5023/prices", { prices }).then(res => {
      console.log(res.data);
    });
  }

  getData() {
    axios.get("http://localhost:5023/prices").then(res => {
      //console.log(res.data);
      this.setState({
        air_condition: res.data.air_condition,
        pool: res.data.pool,
        wifi: res.data.wifi,
        only_breakfast: res.data.only_breakfast,
        half_board: res.data.half_board,
        full_diet: res.data.full_diet,
        parking: res.data.parking,
        normal: res.data.normal,
        family: res.data.family,
        price_of_bed: res.data.price_of_bed,
        tax: res.data.tax
      });
    });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="Prices">
        <h1>Τιμολόγηση</h1>
        <table className="tableParoxes">
          <tr>
            <th align="left">
              <label className="title">Παροχές Δωματίου</label>
            </th>
            <th align="right">
              <label></label>
            </th>
            <th align="left">
              <label className="title">Διατροφή</label>
            </th>
            <th align="right">
              <label></label>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Κλιματισμός</label>
            </th>
            <th align="right">
              <input
                id="air_condition"
                type="number"
                value={this.state.air_condition}
                onChange={this.handleChange}
              />
            </th>
            <th align="left">
              <label className="dec">Μόνο πρωινό</label>
            </th>
            <th align="right">
              <input
                id="only_breakfast"
                type="number"
                value={this.state.only_breakfast}
                onChange={this.handleChange}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Πισίνα</label>
            </th>
            <th align="right">
              <input
                id="pool"
                type="number"
                value={this.state.pool}
                onChange={this.handleChange}
              />
            </th>
            <th align="left">
              <label className="dec">Ημιδιατροφή</label>
            </th>
            <th align="right">
              <input
                id="half_board"
                type="number"
                value={this.state.half_board}
                onChange={this.handleChange}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Wifi</label>
            </th>
            <th align="right">
              <input
                id="wifi"
                type="number"
                value={this.state.wifi}
                onChange={this.handleChange}
              />
            </th>
            <th align="left">
              <label className="dec">Πλήρης διατροφή</label>
            </th>
            <th align="right">
              <input
                id="full_diet"
                type="number"
                value={this.state.full_diet}
                onChange={this.handleChange}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="title">Έξτρα Παροχές</label>
            </th>
            <th align="right">
              <label></label>
            </th>
            <th align="left">
              <label className="title">Δωμάτιο</label>
            </th>
            <th align="right">
              <label></label>
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Θέση στάθμευσης</label>
            </th>
            <th align="right">
              <input
                id="parking"
                type="number"
                value={this.state.parking}
                onChange={this.handleChange}
              />
            </th>
            <th align="left">
              <label className="dec">Κανονικό</label>
            </th>
            <th align="right">
              <input
                id="normal"
                type="number"
                value={this.state.normal}
                onChange={this.handleChange}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="title">Φόρος</label>
            </th>
            <th align="right"></th>
            <th align="left">
              <label className="dec">Οικογενιακό</label>
            </th>
            <th align="right">
              <input
                id="family"
                type="number"
                value={this.state.family}
                onChange={this.handleChange}
              />
            </th>
          </tr>
          <tr>
            <th align="left">
              <label className="dec">Φ.Π.Α.</label>
            </th>
            <th align="right">
              <input
                id="tax"
                type="number"
                value={this.state.tax}
                onChange={this.handleChange}
              />
            </th>
            <th align="left">
              <label className="dec">Τιμή κλίνας</label>
            </th>
            <th align="right">
              <input
                id="price_of_bed"
                type="number"
                value={this.state.price_of_bed}
                onChange={this.handleChange}
              />
            </th>
          </tr>
        </table>
        <button className="btnrcegPrices" onClick={this.handleSubmit}>
          Καταχώρηση
        </button>
      </div>
    );
  }
}

export default AdminTabDBPrices;
