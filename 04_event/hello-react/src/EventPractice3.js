import React, { Component } from "react";

class EventPractice3 extends Component {
  state = {
    username: "",
    message: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={this.state.username}
          onChange={this.handleChange}
        />
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

export default EventPractice3;
