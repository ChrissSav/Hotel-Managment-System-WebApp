import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//import AdminPage from "./componets/AdminFolderPage/AdminPage";
import ReceptionPage from "./componets/ReceptionFolderPage/ReceptionPage";
import WelcomePage from "./componets/WelcomeFolder/WelcomePage";
import AdminLogin from "./componets/LoginPages/AdminLoginPage";
import RecLoginPage from "./componets/LoginPages/RecLoginPage";
import Edit_Room from "./componets/Edit_Components/Edit_Room";
import Edit_Employee from "./componets/Edit_Components/Edit_Employee";
import CostumMenu2 from "./componets/CostumMenu/MenuCostumer";
import DBCostumer_To_pick from "./componets/Costumer/DBCostumer_To_pick";
import cookie from "react-cookies";
//import axios from "axios";
import axios from "./axios.js";

class App extends Component {
  //const auth = cookie.load("userId");
  // useEffect(() => {
  //   console.log(cookie.load("userId"));
  // });
  constructor(props) {
    super(props);
    this.state = {
      reception: false,
      admin: false
    };
    this.handlea_Adminpage = this.handlea_Adminpage.bind(this);
    this.handlea_reclogin = this.handlea_reclogin.bind(this);
    this.cahngeState = this.cahngeState.bind(this);
  }

  handlea_Adminpage() {
    // if (auth === "6548989") {
    //   return <AdminPage />;
    // } else {
    //   return <Redirect to="/" />;
    // }
  }

  async componentDidMount() {
    console.log("componentDidMount", this.state);
    const token = await cookie.load("access_token")
    console.log("===================================================================");
     await axios.get("http://localhost:5023/authCheck",{
      headers: {
        "auth-token":token
      }
    }).then( async res => {
      console.log("CheckRecLogin axios");
      const result = res.data;
    //console.log("result", res);
      if (result.status === "error") {
       // console.log("error");
      } else {
        await this.setState ({
          reception: true,
          admin: false
        });
      }
    });
   // console.log("componentDidMount",this.state);
    console.log("===================================================================");
    //console.log(this.state);
    // Add a request interceptor
  }
  //async componentWillMount() {
   // await this.CheckRecLogin();
  //this.CheckRecLogin();
  // console.log("componentWillMount");
  // Add a request interceptor
  //console.log("componentWillMount",this.state);
  //}

  handlea_reclogin() {
    // console.log("handlea_reclogin");
    //this.CheckRecLogin();
    // console.log("3");
    //this.CheckRecLogin();
    if (this.state.reception) {
      return <Redirect to="/receptionpage" />;
    } else {
      return <RecLoginPage />;
    }
  }

  handlea_recPage() {
    //console.log("handlea_recPage");

    //this.CheckRecLogin();
    //this.CheckRecLogin();
    if (this.state.reception) {
      return <ReceptionPage />;
    } else {
      return <Redirect to="/reclogin" />;
    }
  }

  cahngeState(flag) {
    this.setState({
      reception: flag
    });
  }

  async CheckRecLogin() {
    console.log("CheckRecLogin");
    this.cahngeState(false)
  
    const token = await cookie.load("access_token")
    await axios.get("http://localhost:5023/authCheck",{
          headers: {
            "auth-token":token
          }
        }).then( res => {
          console.log("CheckRecLogin axios");
        const result = res.data;
        //console.log("result", res);
          if (result.status === "error") {
            console.log("error");
          } else {
            this.cahngeState(true)
          }
    });
      //console.log("reception",this.state);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/adminpage" render={() => this.handlea_Adminpage()} />
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/reclogin" render={() => this.handlea_reclogin()} />
            <Route
              path="/receptionpage"
              render={() => this.handlea_recPage()}
            />
            <Route path="/edit_room" component={Edit_Room} />
            <Route path="/edit_employee" component={Edit_Employee} />
            <Route path="/DBCostumer_To_pick" component={DBCostumer_To_pick} />
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
}

export default App;
