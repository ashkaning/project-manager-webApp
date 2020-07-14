import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
/* PAGES */
import Home from "./pages/Home";
import Role from "./pages/Role";
import Service from "./pages/Service";
import Users from "./pages/User";
import Clients from "./pages/Clients";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/roles" component={Role} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;
