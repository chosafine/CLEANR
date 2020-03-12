import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { connect } from "react-redux";
import { addQuestion } from "../../utils/actions";

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  writeToStore = () => {
    this.props.addQuestion("address", this.state.date);
  };

  onChange = date => {
    this.setState({ date }, () => this.writeToStore());
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

export default connect(null, { addQuestion })(Booking);
