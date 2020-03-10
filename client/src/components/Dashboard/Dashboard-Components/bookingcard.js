import React from "react";

class BookingCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // this needs to be a post request to update the db with the notes
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.date}</p>
        <p>{this.props.address}</p>
        <p>{this.props.square_ft}</p>
        <p>{this.props.frequency}</p>
        <p>{this.props.rate}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Notes:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BookingCard;
