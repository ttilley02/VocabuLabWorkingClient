import React, { Component } from "react";
import TokenService from '../services/token-service';
import config from "../config";



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

  handleNoteClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    let cardId = ev.target.name;
    let note = ev.target.value;
  
    
    
    console.log(TokenService.getAuthToken())

    return fetch(`${config.API_ENDPOINT}/api/notes/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        note: note,
        card_id : cardId

      }),
    })
  }

  handleDeleteClick = ev => {
    ev.preventDefault();

  }
  
    

  
  render() {
    const {card} = this.props
    console.log(card.id)
       return (
         <li>
          <section className="card" onClick={this.handleQuestionClick}>
            <p className="question">{card.spa_content}</p>

            <p className="answer" style={{ display: "none" }}>
              {card.eng_content}
            </p>
          </section>
       

          <button className="yesButton" name={card.id} value="testme" onClick={this.handleNoteClick}>
            notes
          </button>
          <button className="noButton" name="card,id"  onClick={this.handleDeleteClick}>
            delete
          </button>
          <section className="notes">
          <h3>notes: </h3>
            <div>{this.props.note}</div>
          </section>


          </li>
          
        
      
    );
  }
}

