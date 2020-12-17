import React, { Component } from "react";

class Counter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixnumber: 10
    };
  }
  render() {
    const { number, fixnumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>변하지 않는 값 {fixnumber}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <br></br>
      </div>
    );
  }
}

export default Counter1;
