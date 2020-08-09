import React, { Component } from "react";
import TokenService from '../services/token-service';
import config from "../config";
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

  handleClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    let fav = ev.target.name;
      return fetch(`${config.API_ENDPOINT}/api/cards/fav/${fav}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        favorite: "yes",
        card_id : fav
      })
    })
    .then(res => {
      if (!res.ok) {
        this.props.history.push('/login');
      }
      
    })
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
       <p>
       <button className="favorite" name={card.id} onClick={this.handleClick}>
             favorite
           </button>
       </p>
    </div>
</div>



        
        /* // <div className="card">
        // <input type="checkbox" id="card1" className="more" aria-hidden="true" />
        // <div className="content">
           
        //         <div className="inner">
        //             <h2>{card.spa_content}</h2>
        //             <div className="rating">
        //                 <i className="fas fa-star"></i>
        //                 <i className="fas fa-star"></i>
        //                 <i className="fas fa-star"></i>
        //                 <i className="fas fa-star"></i>
        //                 <i className="far fa-star"></i>
        //             </div>
        //                <button for="card1" className="button" aria-hidden="true" name={card.id} onClick={this.handleClick}>
        //                  favorite
        //                </button>

        //         </div>
        //     </div>
        //     <div className="back">
        //         <div className="inner">
        //             <div className="info">
        //                 <span>5</span>
        //                 <div className="icon">
        //                     <i className="fas fa-users"></i>
        //                     <span>{card.eng_content}</span>
        //                 </div>
        //             </div>
        //             <div className="info">
        //                 <span>4</span>
        //                 <div className="icon">
        //                     <i className="fas fa-door-open"></i>
        //                     <span>rooms</span>
        //                 </div>
        //             </div>
        //             <div className="info">
        //                 <span>3</span>
        //                 <div className="icon">
        //                     <i className="fas fa-bed"></i>
        //                     <span>beds</span>
        //                 </div>
        //             </div>
        //             <div className="info">
        //                 <span>1</span>
        //                 <div className="icon">
        //                     <i className="fas fa-bath"></i>
        //                     <span>bath</span>
        //                 </div>
        //             </div>
        //             <div className="description">
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
        //                     ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
        //                     tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
        //             </div>
        //             <div className="location">Warsaw, Poland</div>
        //             <div className="price">38€ / day</div>
        //             <label for="card1" className="button return" aria-hidden="true">
        //                 <i className="fas fa-arrow-left"></i>
        //             </label>
        //         </div>
        //     </div>
        // </div>
    
        
        //  <li>
        //   <section className="card" onClick={this.handleQuestionClick}>
        //     <p className="question">{card.spa_content}</p>

        //     <p className="answer" style={{ display: "none" }}>
        //       {card.eng_content}
        //     </p>
        //   </section>
        //   <button className="favorite" name={card.id} onClick={this.handleClick}>
        //     favorite
        //   </button>
        //   </li> */
          
        
      
    );
  }
}

