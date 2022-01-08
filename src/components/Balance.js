import React, { Component } from "react";

export default class Balance extends Component {
  render() {
    return (
      <div>
        <p> Balance : {this.props.balance}</p>
      </div>
    );
  }
}
