import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
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
    console.log(ev.target.name);
  };

  render() {
    const { cardContent } = this.props;

    return (
      <>
        <li>
          <section className="card" onClick={this.handleQuestionClick}>
            <p className="question">{cardContent.spa_content}</p>

            <p className="answer" style={{ display: "none" }}>
              HIDE ME: {cardContent.eng_content}
            </p>
          </section>

          <button className="yesButton" name="notes" onClick={this.handleClick}>
            notes
          </button>
          <button className="noButton" name="delete" onClick={this.handleClick}>
            delete
          </button>
        </li>
      </>
    );
  }
}
