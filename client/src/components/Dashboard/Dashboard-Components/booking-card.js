import React from "react";

class Booking-Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
  	// this needs to be a post request update the db with the notes
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.date}</p>
        <p>{this.props.squareft}</p>
        <p>{this.props.price}</p>
        <form onSubmit={this.handleSubmit}>
  	      <label>
   			Notes:
    	  <input type="text" type="text" value={this.state.value} onChange={this.handleChange} />
  		  </label>
  		  <input type="submit" value="Submit" />
		</form>
      </div>
    );
  }
}

export default Booking-Card;