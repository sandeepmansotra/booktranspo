import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
