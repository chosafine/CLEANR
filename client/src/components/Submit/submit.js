import React from "react";
import axios from "axios";
import store from "../../utils/index";
import StartOver from "../Start Over/startover";

class Submit extends React.Component {
  handleSubmit = () => {
  	const currentStore = store.getState();
  
    axios.post(
  	'http://localhost:3001/api/cleaning',
  	currentStore,
  	{ headers: { 'Content-Type': 'application/json' } }
	).then(response => {
		console.log(response.data)
	})
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
