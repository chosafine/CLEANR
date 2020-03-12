import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class Booking extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => {
    this.setState({ date });
    console.log(date);
  };

  render() {
    return (
      <div className="mb-2">
        <h4>Please Select a Date</h4>
        <Calendar
          className="mx-auto"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Booking;
