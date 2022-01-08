import React, { Component } from "react";

export default class Category extends Component {
  constructor() {
    super();
    this.sumTransByCateg = {};
  }
  sumOfTransactionsByCategory() {
    this.sumTransByCateg = {};
    let dummyDataLength = this.props.dummyData.length;
    let tempDummyData = [...this.props.dummyData];

    for (let i = 0; i < dummyDataLength; i++) {
      let transaction = tempDummyData[i];
      let category = transaction.category;
      let amount = transaction.amount;

      if (!this.sumTransByCateg[category]) {
        this.sumTransByCateg[category] = amount;
      } else {
        this.sumTransByCateg[category] += amount;
      }
    }
  }
  render() {
    this.sumOfTransactionsByCategory();

    return (
      <div>
        {Object.keys(this.sumTransByCateg).map((c, i) => (
          <div key={i}>
            <p key={i}>
              {c} : {this.sumTransByCateg[c]}{" "}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
