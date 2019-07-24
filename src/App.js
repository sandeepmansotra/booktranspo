import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Orders from "./components/orders/Orders";
import Services from "./components/services/Services";
import Categories from "./components/goodstypesetup/Categories";
import Addcategories from "./components/goodstypesetup/Addcategories";
import Users from "./components/users/Users";
import Edit from "./components/users/Edit";
import Role from "./components/accesscontrol/Role";
import Drivers from "./components/drivers/Drivers";
import Add_Drivers from "./components/drivers/Add_Drivers";
import Editdrivers from "./components/drivers/Editdrivers";
import Transport from "./components/transport/Transport";
import Addtransport from "./components/transport/Addtransport";
import Edittransport from "./components/transport/Edittransport";

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
        <Switch>
          <Route exact path="/orders" component={Orders} />
        </Switch>
        <Switch>
          <Route exact path="/services" component={Services} />
        </Switch>
        <Switch>
          <Route exact path="/categories" component={Categories} />
        </Switch>
        <Switch>
          <Route exact path="/addcategories" component={Addcategories} />
        </Switch>
        <Switch>
          <Route exact path="/manage" component={Users} />
        </Switch>
        <Switch>
          <Route exact path="/users/edit" component={Edit} />
        </Switch>
        <Switch>
          <Route exact path="/role" component={Role} />
        </Switch>
        <Switch>
          <Route exact path="/drivers" component={Drivers} />
        </Switch>
        <Switch>
          <Route exact path="/add_drivers" component={Add_Drivers} />
        </Switch>
        <Switch>
          <Route exact path="/transport" component={Transport} />
        </Switch>
        <Switch>
          <Route exact path="/drivers/edit" component={Editdrivers} />
        </Switch>
        <Switch>
          <Route exact path="/addtransport" component={Addtransport} />
        </Switch>
        <Switch>
          <Route exact path="/edit_transport" component={Edittransport} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
