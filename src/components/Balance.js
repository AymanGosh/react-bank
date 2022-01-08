import React, { Component } from "react";
import "../App.css";

export default class Balance extends Component {
  render() {
    let nameOfClass;
    if (this.props.balance > 500) {
      nameOfClass = "green";
    } else {
      nameOfClass = "red";
    }
    return (
      <div>
        <p className={nameOfClass}> Balance : {this.props.balance}</p>
      </div>
    );
  }
}
