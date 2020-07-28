import React, { Component } from "react";
import Card from "../components/Card";

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <h2>Saved Cards</h2>
        <ul className="cardsList">
          {this.props.testData.user.cards.map((card, index) => {
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
