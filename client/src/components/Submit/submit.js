import React from "react";
import axios from "axios";
import store from "../../utils/index";

// This component is a submit button that when clicked (handlesubmit)
// it grabs the current store from redux, iterated through the store
// to map out the names and values to be corresponding object parameters
// for example:
// in the store values are stored as {[ { name: $NAME },{ text: $TEXT } ]}
// we run a for in loop to iterate through each array in the store to become:
// { $NAME: $TEXT } as that is how it needs to be sent to the database
// so essentially we create an object full of { name : text } values and then
// run a post request to the server with that object to then be put into the db
class Submit extends React.Component {
  handleSubmit = () => {
    const currentStore = store.getState();
    let postStore = {};

    for (const property in currentStore.items) {
      postStore[currentStore.items[property].name] =
        currentStore.items[property].text;
    }

    // THIS IS TEMPORARY FOR ONLY TESTING THE DATABASE REMOVE LATER
    // we do not have a userid or id system currently so for testing
    // we are
    postStore["id"] = Math.floor(Math.random() * 1000 + 1);

    axios
      .post("/api/cleaning", postStore, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        // As of right now for development purposes we are logging the response
        // ideally we'd want to redirect them to the dashboard once implemented
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <button type="button" className="btn" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Submit;
