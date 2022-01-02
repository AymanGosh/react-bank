import React, { Component } from "react";
import Transaction from "./Transaction";

export default class Transactions extends Component {
  render() {
    return (
      <div>
        {this.props.dummyData.map((d) => (
          <Transaction key={d.vendor} dummyData={d} />
        ))}
      </div>
    );
  }
}
