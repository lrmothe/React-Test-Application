import React, { Component } from "react";

class ClassClick extends Component {
  clickhandler() {
    console.log("Click");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>BUTTON</button>
      </div>
    );
  }
}
export default ClassClick;
