import React, { Component } from "react";

export default class Transaction extends Component {
  handelDelete = () => {
    this.props.handelDelete(this.props.dummyData.id);
  };

  render() {
    return (
      <div>
        <p>
          <span> {this.props.dummyData.amount} </span>
          <span> {this.props.dummyData.category} </span>
          <span> {this.props.dummyData.vendor} </span>
          <button onClick={this.handelDelete}>DELETE</button>
        </p>
      </div>
    );
  }
}
