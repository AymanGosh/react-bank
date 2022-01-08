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
    };
  }

  async getDataFromDB() {
    const response = await axios.get("http://localhost:8888/transactions");
    this.setState({ dummyData: response.data });
    this.getMyBalance();
  }
  getMyBalance() {
    let sumAmount = 0;
    for (let i = 0; i < this.state.dummyData.length; i++) {
      sumAmount += this.state.dummyData[i].amount;
    }
    this.setState({ balance: sumAmount });
  }

  async componentDidMount() {
    this.getDataFromDB();
  }

  handelDelete = async (id) => {
    let currDummyData = await axios.delete(
      `http://localhost:8888/transaction/${id}`
    );
    this.setState({ dummyData: currDummyData });
    this.getMyBalance();
  };

  makeTransaction = async (amount, vendor, category) => {
    const transaction = { amount, vendor, category };
    console.log(transaction);
    const response = await axios.post(
      "http://localhost:8888/transaction",
      transaction
    );
    let currDummyData = [...this.state.dummyData];
    currDummyData.push(response.data);
    this.setState({ dummyData: currDummyData });
    this.getMyBalance();
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
