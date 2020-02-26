import React from "react";
import axios from "axios";
import store from "../../utils/index";
import { Modal, Button } from 'react-bootstrap';

class Submit extends React.Component {
  handleSubmit = () => {
    const currentStore = store.getState();
    let postStore = {};

    for (const property in currentStore.items) {
      postStore[currentStore.items[property].name] =
        currentStore.items[property].text;
    }

    // THIS IS TEMPORARY FOR ONLY TESTING THE DATABASE REMOVE LATER
    postStore["id"] = Math.floor((Math.random() * 1000) + 1);;

    axios
      .post("http://localhost:3001/api/cleaning", postStore, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
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

export default Submit