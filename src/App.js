import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/Transactions";

import Operations from "./components/Operations";
import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [
        { _id: 1, amount: 3200, vendor: "Elevation", category: "Salary" },
        { _id: 2, amount: -7, vendor: "Runescape", category: "Entertainment" },
        { _id: 3, amount: -20, vendor: "Subway", category: "Food" },
        { _id: 4, amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
      balance: 0,
      currId: 5,
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:8888/transactions");
    this.setState({ dummyData: response.data });
  }

  handelDelete = async (id) => {
    let currDummyData = [...this.state.dummyData];
    const index = currDummyData.findIndex((currD) => currD._id === id);
    if (index !== -1) currDummyData.splice(index, 1);
    this.setState({ dummyData: currDummyData });

    await axios.delete(`http://localhost:8888/transaction/${id}`);
  };

  makeTransaction = async (amount, vendor, category) => {
    const transaction = { amount, vendor, category };
    const response = await axios.post(
      "http://localhost:8888/transaction",
      transaction
    );
    let newCurrId = this.state.currId + 1;
    let currDummyData = [...this.state.dummyData];
    currDummyData.push(response.data);
    this.setState({ currId: newCurrId });
    this.setState({ dummyData: currDummyData });
    let newBalance = this.state.balance + amount;
    this.setState({ balance: newBalance });
  };

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
                  makeTransaction={this.makeTransaction}
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
