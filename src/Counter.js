import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h1>Counter</h1>
        <h2>{this.props.state.counter}</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    );
  }
}

const s2p = state => {
  return { state };
};
const d2p = dispatch => {
  return {
    decrement: () => dispatch({ type: "DECREMENT" }),
    increment: () => dispatch({ type: "INCREMENT" })
  };
};

export default connect(
  s2p,
  d2p
)(Counter);
