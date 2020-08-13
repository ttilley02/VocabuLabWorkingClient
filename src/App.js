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
import PrivateRoute from "./components/PrivateRoute";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import AddNote from "./components/AddNote";
import TokenService from "./services/token-service";

export default class App extends Component {
  state = {
    hasError: false,
    cards: [],
    favoriteCards: [],
    UserLoggedIn: ""
  };

  updateFavoriteCards = (favs) => {
    this.setState({ favoriteCards: favs });
  };

  deleteNotefromPage = (id) => {
    let stateCopy = this.state.favoriteCards.filter(
      (card) => card.id !== Number(id)
    );
    this.setState({ favoriteCards: stateCopy });
  };

  updateLogIn = (yesOrNo) => {
    this.setState({ UserLoggedIn: yesOrNo });
  };

  componentDidMount() {
    //fetch request for cards
    let areWeLoggedIn = TokenService.getAuthToken();
    if (areWeLoggedIn === null) {
      fetch(Config.API_ENDPOINT + "/api/cards")
        .then((response) => response.json())
        .then((data) => {
          //store response in this.state.cards. 3 random cards

          let cardArray = [];
          let random1 = Math.floor(Math.random() * 189 - 1);
          let random2 = Math.floor(Math.random() * 189 - 1);
          let random3 = Math.floor(Math.random() * 189 - 1);
          cardArray.push(data[random1]);
          cardArray.push(data[random2]);
          cardArray.push(data[random3]);

          this.setState({ cards: cardArray });
        });
    } else {
      fetch(Config.API_ENDPOINT + "/api/cards")
        .then((response) => response.json())
        .then((data) => {
          //store response in this.state.cards. 3 random cards
          let cardArray = [];
          let random1 = Math.floor(Math.random() * 189 - 1);
          let random2 = Math.floor(Math.random() * 189 - 1);
          let random3 = Math.floor(Math.random() * 189 - 1);
          cardArray.push(data[random1]);
          cardArray.push(data[random2]);
          cardArray.push(data[random3]);

          this.setState({ cards: cardArray });
        });
      fetch(`${Config.API_ENDPOINT}/api/cards/mycards`, {
        headers: {
          Authorization: `bearer ${TokenService.getAuthToken()}`
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.updateFavoriteCards(data);
        });
    }
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    let contextValue = {
      cards: this.state.cards,
      favoriteCards: this.state.favoriteCards,
      updateFavoriteCards: this.updateFavoriteCards,
      deleteNotefromPage: this.deleteNotefromPage,
      updateLogIn: this.updateLogIn
    };
    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <header className="App__header">
            <Nav />
          </header>
          <main className="App__main">
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}

            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <PublicOnlyRoute path={"/reg"} component={RegPage} />
              <PublicOnlyRoute path={"/login"} component={LoginPage} />
              <PrivateRoute path={"/profile"} component={ProfilePage} />
              <PrivateRoute path={"/addNote/:cardId"} component={AddNote} />
              <Route path={"/cards"} component={CardListPage} />
            </Switch>
          </main>
        </div>
      </Context.Provider>
    );
  }
}
