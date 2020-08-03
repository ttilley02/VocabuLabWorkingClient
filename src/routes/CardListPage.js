import React, { Component } from "react";
import Context from "../context";
import Card from "../components/Card";


export default class LangChoice extends Component {
  static contextType = Context;



  renderCards() {
    const cardList  = this.context.cards
    console.log(cardList)
    return cardList.map(card =>
      <Card
        key={card.id}
        card={card}
      />
    )
  }


  render() {
    return (
      <>
        <ul className="cardsList">
          
          {this.renderCards()}
          
        </ul>
      </>
    );
  }
}
