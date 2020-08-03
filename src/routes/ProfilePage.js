import React, { Component } from "react";
import Card from "../components/Card";
import Context from "../context";

export default class ProfilePage extends Component {
  static contextType = Context;
  render() {
    return (
      <>
        <h2>Saved Cards</h2>
        <ul className="cardsList">
          {console.log(this.context)}
          {this.context.cards.map((card, index) => {
            return <Card key={index} testData={card} />;
          })}
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Related Resources</h2>
      </>
    );
  }
}
