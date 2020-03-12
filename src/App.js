import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AdminPage from "./componets/AdminFolderPage/AdminPage";
import ReceptionPage from "./componets/ReceptionFolderPage/ReceptionPage";
import WelcomePage from "./componets/WelcomeFolder/WelcomePage";
import AdminLogin from "./componets/LoginPages/AdminLoginPage";
import RecLoginPage from "./componets/LoginPages/RecLoginPage";
import Edit_Room from "./componets/Edit_Components/Edit_Room";
import Edit_Employee from "./componets/Edit_Components/Edit_Employee";
import CostumMenu2 from "./componets/CostumMenu/MenuCostumer";
import NotFound from "./componets/NotFound/NotFound";

import DBCostumer_To_pick from "./componets/Costumer/DBCostumer_To_pick";
import cookie from "react-cookies";
//import axios from "axios";
import axios from "./componets/axios.js";

function App() {
  const [receptionpage_state, setReceptionpage_state] = useState(false);
  const [adminpage_state, setAdminpage_state] = useState(false);

  useEffect(() => {
    //console.log("jbhuguihgtg", cookie.load("access_token"));

    CheckRecLogin();
  });
  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  async function CheckRecLogin() {
    const token = await cookie.load("access_token");
    await axios
      .get("http://localhost:5023/authCheck", {
        headers: {
          "auth-token": token
        }
      })
      .then(async res => {
        //console.log("CheckRecLogin axios");
        const result = res.data;
        //console.log("result", res);
        if (result.status === "error") {
          //console.log("error");
          //setReceptionpage_state(true);
        } else {
          await setReceptionpage_state(true);
        }
      })
      .catch(error => {});
  }
  var checkCookie = (function() {
    var lastCookie = document.cookie; // 'static' memory between function calls
    return function() {
      var currentCookie = document.cookie;
      if (currentCookie !== lastCookie) {
        // something useful like parse cookie, run a callback fn, etc.
        CheckRecLogin();
        lastCookie = currentCookie; // store latest cookie
      } else {
        //console.log("not");
      }
    };
  })();
  window.setInterval(checkCookie, 100);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/adminpage"
            render={() =>
              adminpage_state ? <AdminPage /> : <Redirect to="/adminlogin" />
            }
          />
          <Route
            exact
            path="/adminlogin"
            render={() =>
              adminpage_state ? <Redirect to="/adminpage" /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/reclogin"
            render={() =>
              receptionpage_state ? (
                <Redirect to="/receptionpage" />
              ) : (
                <RecLoginPage />
              )
            }
          />
          <Route
            exact
            path="/receptionpage"
            render={() =>
              receptionpage_state ? (
                <ReceptionPage />
              ) : (
                <Redirect to="/reclogin" />
              )
            }
          />
          <Route exact path="/edit_room" component={Edit_Room} />
          <Route exact path="/edit_employee" component={Edit_Employee} />
          <Route
            exact
            path="/DBCostumer_To_pick"
            component={DBCostumer_To_pick}
          />
          <Route
            exact
            path="/menu2"
            component={() => (
              <CostumMenu2 top_dist={0} left_dist={0} display={"block"} />
            )}
          />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
