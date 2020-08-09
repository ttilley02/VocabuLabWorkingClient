import React, { Component } from "react";
import Context from "../context";
import Card from "../components/Card";



export default class LangChoice extends Component {
  static contextType = Context;



  renderCards() {
    console.log("yes", this.context)
    const cardList  = this.context.cards
    return cardList.map(card =>
      <Card
        key={card.id}
        card={card}
        history={this.props.history}
      />
    )
  }


  render() {
    return (
     
        <div className = 'arena'>
                
          {this.renderCards()}
         
        </div>
     
    );
  }
}
