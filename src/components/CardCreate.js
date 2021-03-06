import React, { Component } from "react";

import Context from "../context";

export default class Card extends Component {
  static contextType = Context;
  handleQuestionClick = ev => {
    ev.preventDefault();
    var x = ev.currentTarget.childNodes[1];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  handleClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });

    //put this in a function to update user pool preferences
  };

  render() {
    let diff = diffArray[Math.floor(Math.random() * diffArray.length)];

    function randomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let diffB = randomInt(this.props.testData.cardpool.Beginner.length);

    let diffI = randomInt(this.props.testData.cardpool.Intermediate.length);

    let randomCardIndex;

    if (diff === this.props.testData.cardpool.Beginner) {
      randomCardIndex = diffB;
    }
    if (diff === this.props.testData.cardpool.Intermediate) {
      randomCardIndex = diffI;
    }

    return (
      <>
        <li>
          <section className="card" onClick={this.handleQuestionClick}>
            <p className="question">{diff[randomCardIndex].Spa}</p>

            <p className="answer" style={{ display: "none" }}>
              HIDE ME: {diff[randomCardIndex].Eng}
            </p>
          </section>
          <button className="yesButton" name="yes" onClick={this.handleClick}>
            yes
          </button>
          <button className="noButton" name="no" onClick={this.handleClick}>
            no
          </button>
          <button className="noButton" name="fav" onClick={this.handleClick}>
            Favorite
          </button>
        </li>
      </>
    );
  }
}
