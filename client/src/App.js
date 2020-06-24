import React, { Component } from "react";
import Navbar from './components/Navbar';
import Applications from './pages/Applications';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Applications />
      </div>
    );
  }
}

export default App;
