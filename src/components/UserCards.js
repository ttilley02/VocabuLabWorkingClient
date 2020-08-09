import React, { Component } from "react";
import TokenService from '../services/token-service';
import config from "../config";
import { Link } from "react-router-dom";
import Context from "../context";



export default class Card extends Component {
  static contextType = Context

  handleQuestionClick = ev => {
    ev.preventDefault();
    var x = ev.currentTarget.childNodes[1];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };



  handleDeleteClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    
    let cardId = ev.target.name;
    
    return fetch(`${config.API_ENDPOINT}/api/notes/`+cardId, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(
        this.context.deleteNotefromPage(cardId)
    )
 }
  
    

  
  render() {
    const {card} = this.props
    
       return (
<div className="flip flip-vertical">
    <div className="front" >
       <h1 className="text-shadow">{card.spa_content}</h1>
    </div>
    <div className="back">
       <h2>{card.eng_content}</h2>
       
          <button className="noButton" name={card.id}  onClick={this.handleDeleteClick}>
            delete
          </button>
          <p><Link to={{pathname:`/addNote/${card.id}`}} >Add a Note</Link>
          <section className="">
          <h3>notes: </h3>
            <div>{this.props.note}</div>
          </section>
       </p>
    </div>
</div>


      
    );
  }
}

