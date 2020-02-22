import React from "react";
import axios from "axios";
import store from "../../utils/index";

class Submit extends React.Component {
  handleSubmit = () => {
    /* axios.post(
  	'http://localhost:3001/students/create-student',
  	{ example: 'data' },
  	{ headers: { 'Content-Type': 'application/json' } }
	).then(response => {
		console.log(response.data)
	}) */
    console.log(store.getState());
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
