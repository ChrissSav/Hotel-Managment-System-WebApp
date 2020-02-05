import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    const { email, password } = this.state;
    console.log(email, password);
    if (email === "email") {
      window.open(
        "https://react-bootstrap.github.io/getting-started/introduction/",
        "_blank"
      );
    }
  }

  render() {
    return (
      <div className="wrap">
        <h2>Admin Login</h2>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Όνομα Χρήστη"
            value={this.state.email}
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
    );
  }
}

export default Login;
