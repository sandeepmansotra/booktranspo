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
        <Route path="/dashboard" component={Dashboard} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
