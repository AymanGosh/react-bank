import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Category from "./components/Category";
import Balance from "./components/Balance";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
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
    let response = await axios.delete(
      `http://localhost:8888/transaction/${id}`
    );
    let tempData = this.state.dummyData.filter((d) => d._id != id);
    this.setState({ dummyData: tempData });
    this.getMyBalance();
  };

  makeTransaction = async (amount, vendor, category) => {
    const transaction = { amount, vendor, category };
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
            <Link to="/Category"> Category</Link>
            <Balance balance={this.state.balance} />

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
            <Route
              path="/Category"
              exact
              render={() => (
                <Category key={"Category"} dummyData={this.state.dummyData} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
