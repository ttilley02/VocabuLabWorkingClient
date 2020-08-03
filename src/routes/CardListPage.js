import React, { Component } from "react";
import Context from "../context";
import Card from "../components/Card";

export default class LangChoice extends Component {
  static contextType = Context;
  render() {
    const { cardList = [] } = this.context.cards;
    return (
      <>
        <ul className="cardsList">
          {cardList.map((card, index) => {
            return <Card key={index} cardContent={card} />;
          })}
        </ul>
      </>
    );
  }
}
