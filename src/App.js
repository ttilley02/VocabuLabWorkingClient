import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import RegPage from "./routes/RegPage";
import LoginPage from "./routes/LoginPage";
import CardListPage from "./routes/CardListPage";
import ProfilePage from "./routes/ProfilePage";
import Nav from "./components/Nav";
import "./App.css";
import Config from "./config";
import Context from "./context";
import PrivateRoute from './components/PrivateRoute'
import PublicOnlyRoute from './components/PublicOnlyRoute'

export default class App extends Component {
  state = {
    hasError: false,
    cards: [],
    users: [],
    notes: [],
    spa_content: {
      value: "",
      touched: false
    },
    eng_Content: {
      value: "",
      touched: false
    }
  };

  componentDidMount() {
    //fetch request for cards
    fetch(Config.API_ENDPOINT + "/api/cards")
      .then(response => response.json())
      .then(data => {
        //store response in this.state.cards

        this.setState({ cards: data });
      });
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    let contextValue = {
      cards: this.state.cards,
      users: this.state.users
    };
    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <PublicOnlyRoute path={"/reg"} component={RegPage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PrivateRoute path={"/profile"} component={ProfilePage} />
            <Route path={"/cards"} component={CardListPage} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}
