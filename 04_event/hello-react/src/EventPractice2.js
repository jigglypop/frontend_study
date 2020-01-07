import React, { Component } from "react";

class EventPractice2 extends Component {
  state = {
    message: ""
  };
  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ""
    });
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice2;
