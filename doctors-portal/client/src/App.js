import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import "./App.css";
import AddADoctor from "./components/Dashboard/AddADoctor/AddADoctor";
import AllPatients from "./components/Dashboard/AllPatients/AllPatients";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/appointment">
          <Appointment />
        </Route>
        <Route exact path="/dashboard/appointments">
          <Dashboard />
        </Route>
        <Route exact path="/addADoctor">
          <AddADoctor />
        </Route>
        <Route exact path="/allPatients">
          <AllPatients />
        </Route>
        <Redirect from="/dashboard" to="/dashboard/appointments" />
      </Switch>
    </Router>
  );
}

export default App;
