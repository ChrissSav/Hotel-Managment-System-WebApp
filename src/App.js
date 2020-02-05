import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    console.log(email);
    console.log(password);
    if (email === "email") {
      window.open(
        "https://react-bootstrap.github.io/getting-started/introduction/",
        "_blank"
      );
    }
  }
  useEffect(() => {
    //console.log("jbhuguihgtg");
  });

  return (
    <div className="wrap">
      <h2>Admin Login</h2>

      <div>
        <input
          type="text"
          name="username"
          placeholder="Ονομα Χρηστη"
          onChange={e => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Κωδικός"
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <button class="btnLogin" onClick={handleSubmit}>
        Είσοδος
      </button>
    </div>
  );
}

export default App;
