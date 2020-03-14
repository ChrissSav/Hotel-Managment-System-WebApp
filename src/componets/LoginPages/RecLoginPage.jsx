import React, { Component } from "react";
import "./RecLoginPageStyle.css";
import axios from "axios";
import cookie from "react-cookies";

class RecLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "ioanna",
      password: "1995"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.LoginToAPi = this.LoginToAPi.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { user_name, password } = this.state;
    //console.log(user_name, password);
    if (user_name.length > 3 && password.length > 3) {
      this.LoginToAPi(user_name, password);
    } else {
      alert("pedia");
    }
  }

  LoginToAPi(user_name, password) {
    const data = {
      user_name: user_name,
      password: password
    };
    axios.post("http://localhost:5023/login/employee", { data }).then(res => {
      console.log(res.data);
      const result = res.data;
      if (result.status !== "error") {
        //alert("Επιτυχής καταχώρηση");
        cookie.save("access_token", result.access_token, { path: "/" });
        cookie.save("refress_token", result.refress_token, { path: "/" });
        cookie.save("flag", "reception", { path: "/" });

        window.location.href = "/receptionpage";
      } else {
        alert("Παρακαλώ ελέγξτε τα στοιχεία σας !");
      }
    });
  }
  render() {
    return (
      <div className="Rec_container">
        <div className="header_con">
          <h1>Hotel Managment System</h1>
        </div>
        <div className="container">
          <h3>Reception Login</h3>
          <div className="wrap">
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
          </div>
          <button className="btnLogin" onClick={this.handleSubmit}>
            Είσοδος
          </button>
        </div>
      </div>
    );
  }
}

export default RecLoginPage;
