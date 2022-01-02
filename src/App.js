import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/Transactions";

import Operations from "./components/Operations";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
      balance: 0,
    };
  }
  deposit = (amount, vendor, category) => {
    let newTransaction = { amount, vendor, category };
    let currDummyData = [...this.state.dummyData];
    currDummyData.push(newTransaction);
    this.setState({ dummyData: currDummyData });
    let newBalance = this.state.balance + amount;
    this.setState({ balance: newBalance });
  };

  // withdraw = (amount, vendor, category) => {};
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/">Transactions </Link>
            <Link to="/Operations"> Operations</Link>
            <p> Balance : {this.state.balance}</p>
            <Route
              path="/"
              exact
              render={() => (
                <Transactions key={1} dummyData={this.state.dummyData} />
              )}
            />
            <Route
              path="/Operations"
              exact
              render={() => (
                <Operations
                  key={2}
                  deposit={this.deposit}
                  // withdraw={this.withdraw}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
