import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let defaultStyle = {
  'color': 'white'
}

class Aggregate extends Component {
  render() {
    return (
      <div className="App">
        <h2>Number Text</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '5em'}}>Title</h1>
        <Aggregate />
      </div>
    );
  }
}

export default App;
