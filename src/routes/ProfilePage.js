import React, { Component } from "react";
import UserCards from "../components/UserCards";
import Context from "../context";
import config from '../config'
import TokenService from '../services/token-service';

export default class ProfilePage extends Component {
  static contextType = Context;

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
    fetch(`${config.API_ENDPOINT}/api/cards/3/cards`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data });
        console.log(this.state.cards)
          }
      )

  }



  render() {
    return (
      <>
        <ul className="cardsList">
        {this.state.cards.map(card =>
        <UserCards
          key={card.id}
          card={card}
          note ={card.note}
        />
        )}
        </ul>
      </>
    );
  }
}
