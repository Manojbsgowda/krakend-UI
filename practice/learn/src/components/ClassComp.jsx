import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
    this.handlebutton = this.handlebutton.bind(this);
  }

  handlebutton() {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div>
        <p>{this.state.toggle ? "nithin" : "manoj"}</p>
        <button onClick={this.handlebutton}>Click</button>
      </div>
    );
  }
}
