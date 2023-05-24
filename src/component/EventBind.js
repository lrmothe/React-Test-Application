import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();

    this.state = {
      message: "Goodbye",
    };
  }

  clickhandler() {
    this.setState({
      message: "Welcome",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickhandler()}>Click me</button>
      </div>
    );
  }
}

export default EventBind;
