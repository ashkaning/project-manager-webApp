import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import API from "./utils/API";
/* COMPONENT */
import { AdminMenu } from "./components/AdminMenu";
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
    this.checkSecurity()
  }
  checkSecurity = () => {
    API.checkSecurity()
      .then((res) => {
        if (res.data.isUserLoggin === true && res.data.userId !== null) {
          toast.info("You are logged in... !");
          this.props.history.push('/users', { some: 'state' })
        }
        else if (res.data.isUserLoggin === false && res.data.userId === null) {
          toast.info("Please Try To Login... !");
        }
        else {
          toast.info("mmm... Something is wrong. Please Try To again... !");
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <div>
          <AdminMenu userId={this.state.userId} />
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
