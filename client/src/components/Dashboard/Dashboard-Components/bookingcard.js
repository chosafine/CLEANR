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
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Your next scheduled cleaning:</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.date}</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Date:</strong> {this.props.address}
            </li>
            <li className="list-group-item">
              <strong>Square Feet:</strong> {this.props.square_ft}
            </li>
            <li className="list-group-item">
              <strong>Price:</strong> ${this.props.rate}
            </li>
          </ul>
          <br />
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Notes:</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="notes-for-cleaners"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <small id="textHelp" className="form-text text-muted">
                Send any notes to the clean team!
              </small>
            </div>
            <input
              type="submit"
              value="Send"
              className="btn btn-success mt-2"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default BookingCard;
