import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let defaultStyle = {
  'color': 'white'
}



class Aggregate extends Component {
  render() {
    return (
      <div className="App" style={{ ...defaultStyle, 'display': 'inline-block', 'margin': '10px'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <div className='Input'>
        <input type="text"/>
      </div>
    )
  }
}

class List extends Component {
  render() {
    return (
      <div className='List' style={{...defaultStyle, 'display': 'inline-block', 'margin': '10px'}}>
        Playlist Name
        <ul>
          <li>Song1</li>
          <li>Song2</li>
          <li>Song3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '5em'}}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Input />
        <List />
        <List />
        <List />
        <List />
      </div>
    );
  }
}

export default App;
