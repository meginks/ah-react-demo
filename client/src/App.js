import React, { Component } from "react";
import characters from "./Characters";

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.setState({
      characters
    })
  }


  render() {
    return <div className="app">Hey!</div>;
  }
}

export default App;

// 2 inputs - name imput and job input 
// form - parent of inputs 
// app --> render it all <FORM /> in app. 

// Table component with 2 separate components that sync into it
// table header 
// table body 
