import React, { Component } from "react";

class EventPractice3 extends Component {
  state = {
    message: ""
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleClick(e) {
    this.setState({
      message: ""
    });
  }
  render() {
    return (
      <>
        <h1>4.2.3.임의 메서드 만들기</h1>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </>
    );
  }
}

export default EventPractice3;
