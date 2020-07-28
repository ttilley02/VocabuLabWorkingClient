import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import RegPage from "./routes/RegPage";
import LoginPage from "./routes/LoginPage";
import CardListPage from "./routes/CardListPage";
import ProfilePage from "./routes/ProfilePage";
import Nav from "./components/Nav";
import "./App.css";
import testData from "./testData/cardData";

export default class App extends Component {
  state = { hasError: false, testdata: testData };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/reg"} component={RegPage} />
          <Route path={"/login"} component={LoginPage} />
          <Route
            exact
            path="/profile"
            render={() => <ProfilePage testData={this.state.testdata} />}
          />
          <Route
            exact
            path="/cards"
            render={() => <CardListPage testData={this.state.testdata} />}
          />
        </Switch>
      </div>
    );
  }
}
