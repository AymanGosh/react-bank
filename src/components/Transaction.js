import React, { Component } from "react";

export default class Transaction extends Component {
  render() {
    return (
      <div>
        <p>
          <span> {this.props.dummyData.amount} </span>
          <span> {this.props.dummyData.category} </span>
          <span> {this.props.dummyData.vendor} </span>
        </p>
      </div>
    );
  }
}
