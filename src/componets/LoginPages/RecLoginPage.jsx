import React, { Component } from "react";
import "./RecLoginPageStyle.css";

class RecLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { user_name, password } = this.state;
    console.log(user_name, password);
    if (user_name === "") {
      this.props.history.push("/receptionpage");
    }
  }

  render() {
    return (
      <div className="Rec_container">
        <div className="header_con">
          <h1>Hotel Managment System</h1>
        </div>
        <div className="container">
          <h3>Reception Login</h3>
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Όνομα Χρήστη"
              value={this.state.user_name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Κωδικός"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <button class="btnLogin" onClick={this.handleSubmit}>
            Είσοδος
          </button>
        </div>
      </div>
    );
  }
}

export default RecLoginPage;
