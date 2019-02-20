import React, { Component } from "react";
import characters from "./Characters";
import Form from './components/Form/Form'; 
import Table from './components/Table/Table';

class App extends Component {
  state = {
    characters: [], 
    name: ''
  };

  componentDidMount() {
    this.setState({
      characters
    });
  }

  onNameChange = (name) => {
    this.setState({
      name
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ characters: [...characters, {name: this.state.name }], name: ''})
  }

  render() {
    return (
      <div className="app">
        <Form name={this.state.name} onNameChange={this.onNameChange} handleSubmit={this.handleSubmit} />
        <Table characters={this.state.characters} />
      </div>
    );
  }
}

export default App;

// 2 inputs - name imput and job input
// form - parent of inputs
// app --> render it all <FORM /> in app.

// Table component with 2 separate components that sync into it
// table header
// table body
// 2 buttons -- add / delete / add / edit (want this feature on all entries)
