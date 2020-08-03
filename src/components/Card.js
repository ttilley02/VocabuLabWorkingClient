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

  handleClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    let fav = ev.target.name;
    console.log(fav)
    
    console.log(TokenService.getAuthToken())

    return fetch(`${config.API_ENDPOINT}/api/cards/${fav}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        favorite: fav,
        card_id : fav

      }),
    })
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
       

          {/* <button className="yesButton" name="notes" onClick={this.handleClick}>
            notes
          </button>
          <button className="noButton" name="delete" onClick={this.handleClick}>
            delete
          </button> */}
          <button className="favorite" name={card.id} onClick={this.handleClick}>
            favorite
          </button>
          </li>
          
        
      
    );
  }
}

