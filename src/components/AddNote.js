import React from "react";
import TokenService from '../services/token-service';
import "../App.css";
import config from '../config'
import { Textarea } from '../components/utils'
import Context from '../context'

export default class AddNote extends React.Component {
  static contextType = Context;

  handleSubmit = ev => {

     const { text } = ev.target
     ev.preventDefault();
     console.log("eweee")
        fetch(`${config.API_ENDPOINT}/api/notes/`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'Authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          card_id : this.props.match.params.cardId,
          note : text.value
       })
      })
      .then(()=>{
        this.props.history.push('/profile')
      })
   }
  

  
  render() {
    return (
      <form
        className='ReviewForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type your notes...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type your notes...'>
          </Textarea>
        </div>
        <button type='submit'>
          Add note
        </button>
      </form>
    )
  }
}

