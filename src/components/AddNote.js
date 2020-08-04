import React from "react";
import TokenService from '../services/token-service';
import "../App.css";

export default class AddNote extends React.Component {


  validateNoteName() {
    const name = this.props.state.noteName.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length > 32) {
      return "Name must be less than 32 characters long";
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    // let folderIdResult = Object.values(this.props.folderList).find(
    //   folder => folder.name === this.props.state.noteFolder.value
    // );
    // console.log(folderIdResult);
    // const min = 1;
    // const max = 10000;
    // const generatedId = min + Math.random() * (max - min);
    // let newDate = new Date();

    let noteInput = {
      card_id: generatedId,
      note: this.props.state.noteName.value
    };
    // console.log("Adding note " + noteInput.name);
    fetch(`http://localhost:8080/notes/`, {
      method: "POST",
      body: JSON.stringify(noteInput),
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error;
          });
        }
        return res.json();
      })
      .then(() => {
        this.props.AddNote(noteInput);
        this.props.clearNoteItems();
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const folderOptions = Object.keys(this.props.folderList).map(
      (folder, index) => {
        return (
          <option key={index} value={this.props.folderList[folder].name}>
            {this.props.folderList[folder].name}
          </option>
        );
      }
    );

    return (
      <div>
        <form className="AddNote" onSubmit={e => this.handleSubmit(e)}>
          <h2>Add Note</h2>
          <div className="note__hint" />
          <div className="form-group">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              className="noteName__control"
              name="name"
              id="name"
              value={this.props.state.noteName.value}
              onChange={this.props.updateAddNoteName}
              required
            />
            {this.props.state.noteName.touched && (
              <ValidationError message={this.validateNoteName()} />
            )}
          </div>
          <div className="note__hint" />
          <div className="form-group">
            <label htmlFor="name">Content: </label>
            <textarea
              type="text"
              className="noteConte__control"
              name="name"
              id="name"
              value={this.props.state.noteContent.value}
              onChange={this.props.updateAddNoteContent}
              required
            />
          </div>
          <select
            id="folderChoice"
            name="Folder"
            onChange={e => this.props.folderSelection(e)}
          >
            <option value="None">Select one...</option>
            {folderOptions}
          </select>
          <button type="submit" disabled={this.validateNoteName()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AddNote.propTypes = {
  updateAddNoteName: PropTypes.func.isRequired,
  updateAddNoteContent: PropTypes.func.isRequired,
  clearNoteItems: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  folderList: PropTypes.object.isRequired,
  folderSelection: PropTypes.object.isRequired
};
