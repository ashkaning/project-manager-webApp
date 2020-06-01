import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";
import Role from "./pages/Role";
import Service from "./pages/Service";
import Users from "./pages/User";
import Clients from "./pages/Clients";
import NoMatch from "./pages/NoMatch";



function App() {
  return (
    <Router>
      
      <div>
      <TopNav />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/roles" component={Role} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/services" component={Service} />
          <Route component={NoMatch} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
