import React, { Component } from "react";
import cardData from "../testData/cardData";

export default class LandingPage extends Component {
  renderCards() {
    const cardGenerator = cardData;
    const { cardsList = [] } = cardGenerator;
    return cardsList.map(card => <cardCreate key={card.id} card={card} />);
  }
}
