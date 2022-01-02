import React, { Component } from "react";
import Transaction from "./Transaction";

export default class Transactions extends Component {
  render() {
    return (
      <div>
        {this.props.dummyData.map((d) => (
          <Transaction dummyData={d} />
        ))}
      </div>
    );
  }
}
