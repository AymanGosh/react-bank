import React, { Component } from "react";

export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      vendor: "",
      category: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  deposit = () => {
    this.props.makeTransaction(
      parseInt(this.state.amount),
      this.state.vendor,
      this.state.category
    );
  };

  withdraw = () => {
    this.props.makeTransaction(
      parseInt(this.state.amount) * -1,
      this.state.vendor,
      this.state.category
    );
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={this.state.amount}
          onChange={this.handleChange}
        />

        <input
          type="text"
          placeholder="Vendor"
          name="vendor"
          value={this.state.vendor}
          onChange={this.handleChange}
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        />

        <button type="button" onClick={this.deposit}>
          Deposit
        </button>

        <button type="button" onClick={this.withdraw}>
          Withdraw
        </button>
      </form>
    );
  }
}
