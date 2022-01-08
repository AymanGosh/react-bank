import React, { Component } from "react";
import Transaction from "./Transaction";

export default class Transactions extends Component {
  render() {
    return (
      <div>
        {this.props.dummyData.length > 0
          ? this.props.dummyData.map((d) => (
              <Transaction
                key={d._id}
                dummyData={d}
                handelDelete={this.props.handelDelete}
              />
            ))
          : ""}
      </div>
    );
  }
}
