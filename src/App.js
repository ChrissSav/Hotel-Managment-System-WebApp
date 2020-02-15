import React, { useEffect } from "react";
//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./componets/AdminFolderPage/AdminPage";
import AdminLogin from "./componets/AdminLogin";

function App() {
  useEffect(() => {
    //console.log("jbhuguihgtg");
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/adminpage" component={AdminPage} />
          <Route path="/adminlogin" component={AdminLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
