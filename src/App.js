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
        { id: 1, amount: 3200, vendor: "Elevation", category: "Salary" },
        { id: 2, amount: -7, vendor: "Runescape", category: "Entertainment" },
        { id: 3, amount: -20, vendor: "Subway", category: "Food" },
        { id: 4, amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
      balance: 0,
      currId: 5,
    };
  }
  deposit = (amount, vendor, category) => {
    let newCurrId = this.state.currId + 1;
    let newTransaction = { newCurrId, amount, vendor, category };
    let currDummyData = [...this.state.dummyData];
    currDummyData.push(newTransaction);
    this.setState({ currId: newCurrId });
    this.setState({ dummyData: currDummyData });
    let newBalance = this.state.balance + amount;
    this.setState({ balance: newBalance });
  };

  handelDelete = (id) => {
    let currDummyData = [...this.state.dummyData];
    const index = currDummyData.findIndex((currD) => currD.id === id);
    if (index !== -1) currDummyData.splice(index, 1);
    this.setState({ dummyData: currDummyData });
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
                <Transactions
                  key={"Transactions"}
                  handelDelete={this.handelDelete}
                  dummyData={this.state.dummyData}
                />
              )}
            />
            <Route
              path="/Operations"
              exact
              render={() => (
                <Operations
                  key={"Operations"}
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
