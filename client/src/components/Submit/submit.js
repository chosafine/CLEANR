import React from "react";
import axios from "axios";
import store from "../../utils/index";
import StartOver from "../Start Over/startover";

class Submit extends React.Component {
  handleSubmit = () => {
    const currentStore = store.getState();
    let postStore = {};

    for (const property in currentStore.items) {
      postStore[currentStore.items[property].name] =
        currentStore.items[property].text;
    }

    axios
      .post("http://localhost:3001/api/cleaning", postStore, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div>
        <button type="button" className="btn" onClick={this.handleSubmit}>
          Submit
        </button>
        <StartOver />
      </div>
    );
  }
}

export default Submit;
