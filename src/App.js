import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/Transactions";

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
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            exact
            render={() => <Transactions dummyData={this.state.dummyData} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
