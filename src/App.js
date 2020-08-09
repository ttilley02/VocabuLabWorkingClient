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
import AddNote from './components/AddNote'
import TokenService from './services/token-service'


export default class App extends Component {


  state = {
    hasError: false,
    cards: [],
    favoriteCards: []
  };

  updateFavoriteCards = favs => {
    this.setState({ favoriteCards: favs });
  }

  updateFavoriteCardNote = (note , id) => {
    let cardtoUpdate = this.state.favoriteCards.find(card => card.id === Number(id))
    console.log(cardtoUpdate.id)

  }

  deleteNotefromPage = id => {
    let stateCopy= this.state.favoriteCards.filter(card => card.id !== Number(id))
    this.setState({ favoriteCards: stateCopy });
    
  };


  componentDidMount() {
    //fetch request for cards
    let areWeLoggedIn = TokenService.getAuthToken()
    if( areWeLoggedIn === null){ 
    fetch(Config.API_ENDPOINT +"/api/cards")
      .then(response => response.json())
      .then(data => {
        //store response in this.state.cards

        this.setState({ cards: data });
      });
    }
      else{ 
      
      fetch(Config.API_ENDPOINT +"/api/cards")
      .then(response => response.json())
      .then(data => {
        //store response in this.state.cards

        this.setState({ cards: data });
      })   
      fetch(`${Config.API_ENDPOINT}/api/cards/mycards`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(response => response.json())
      .then(data => {
        this.updateFavoriteCards(data)
          }
      )
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
      deleteNotefromPage: this.deleteNotefromPage
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
            <PrivateRoute path={"/addNote/:cardId"} component={AddNote} />
            <Route path={"/cards"} component= {CardListPage} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}
