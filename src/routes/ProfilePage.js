import React, { Component } from "react";
import UserCards from "../components/UserCards";
import Context from "../context";
import config from "../config";
import TokenService from "../services/token-service";

export default class ProfilePage extends Component {
  static contextType = Context;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/cards/mycards`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.context.updateFavoriteCards(data);
      });
  }

  render() {
    return (
      <div className="arena">
        {this.context.favoriteCards.map((card) => (
          <UserCards
            key={card.id}
            card={card}
            note={card.note}
            noteClickUpdate={this.noteClickUpdate}
            history={this.props.history}
          />
        ))}
      </div>
    );
  }
}
