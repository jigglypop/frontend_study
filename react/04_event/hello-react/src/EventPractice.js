import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: ""
  };
  render() {
    return (
      <div>
        <h1>4.2.2.2. state에 input담기</h1>
        <input
          type="text"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        {this.state.message}
      </div>
    );
  }
}
export default EventPractice;
