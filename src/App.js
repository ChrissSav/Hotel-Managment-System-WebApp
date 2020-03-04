import React, { useEffect } from "react";
//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./componets/AdminFolderPage/AdminPage";
import ReceptionPage from "./componets/ReceptionFolderPage/ReceptionPage";
import WelcomePage from "./componets/WelcomeFolder/WelcomePage";
import AdminLogin from "./componets/LoginPages/AdminLoginPage";
import RecLoginPage from "./componets/LoginPages/RecLoginPage";
import CostumMenu from "./componets/CostumMenu/Menu";
import Edit_Room from "./componets/Edit_Components/Edit_Room";
import Edit_Employee from "./componets/Edit_Components/Edit_Employee";
import CostumMenu2 from "./componets/CostumMenu/MenuCostumer";
import add_cotumer from "./componets/Costumer/AddCostumer";

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
          <Route path="/reclogin" component={RecLoginPage} />
          <Route path="/receptionpage" component={ReceptionPage} />
          <Route path="/edit_room" component={Edit_Room} />
          <Route path="/edit_employee" component={Edit_Employee} />
          <Route path="/add_cotumer" component={add_cotumer} />
          <Route
            path="/menu2"
            component={() => (
              <CostumMenu2 top_dist={0} left_dist={0} display={"block"} />
            )}
          />
          <Route path="" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
