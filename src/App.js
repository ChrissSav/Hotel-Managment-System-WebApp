import React, { useEffect } from "react";
//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./componets/AdminFolderPage/AdminPage";
import AdminLogin from "./componets/AdminLogin";
import ReceptionPage from "./componets/ReceptionFolderPage/ReceptionPage";

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
          <Route path="/receptionpage" component={ReceptionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
