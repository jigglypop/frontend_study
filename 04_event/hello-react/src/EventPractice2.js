import React, { Component } from "react";

class EventPractice2 extends Component {
  state = {
    message: ""
  };
  render() {
    return (
      <div>
        <h1>4.2.2.3. 버튼을 누를 때 comment값을 공백으로 설정</h1>
        <input
          type="text"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <button onClick={() => this.setState({ message: "" })}>확인</button>
      </div>
    );
  }
}

export default EventPractice2;
