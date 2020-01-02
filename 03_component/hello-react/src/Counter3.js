import React, { Component } from "react";

class Counter3 extends Component {
  state = {
    number: 0,
    fixnumber: 10
  };

  render() {
    const { number, fixnumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>변하지 않는 값 {fixnumber}</h1>
        <button
          onClick={() => {
            this.setState(prevState => {
              return { number: prevState.number + 1 };
            });
            this.setState(prevState => {
              return { number: prevState.number + 1 };
            });
            // this.setState(prevState => ({
            //   number: prevState.number + 1
            // }));
          }}
        >
          +1
        </button>
        <br></br>
      </div>
    );
  }
}

export default Counter3;
