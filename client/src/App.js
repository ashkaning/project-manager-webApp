import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API"
/* COMPONENT */
import AdminMenu from "./components/AdminMenu";
/* PAGES */
import Home from "./pages/Home";
import Role from "./pages/Role";
import Service from "./pages/Service";
import Users from "./pages/User";
import Clients from "./pages/Clients";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  state = {
    userId: null
  }
  componentDidMount() {
    this.checkSession()
  }
  checkSession = () => {
    API.getSession()
      .then((res) => {
        if (res.data.isUserLoggin) {
          this.setState({
            userId: res.data.userId
          })
        }
        else {
          this.setState({ userId: null })
        }
      })
      .catch(err => console.log(err))
  }

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
            <Route component={NoMatch} />
          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;
