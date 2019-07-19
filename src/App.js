import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
