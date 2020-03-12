import React from "react";
import { connect } from "react-redux";
import { reset } from "../../utils/actions";

// This component is a button that when clicked (handleStartOver)
// will go ahead and run the reset action on the store to go ahead
// and reset the store back to being an empty object.
// We also have separate function running that enabled all of the buttons
// for the selection cards as when a user originally selects an option
// it will disable that specific card, but as they're setting their choices
// we want to re-enabled them
class StartOver extends React.Component {
  handleStartOver = () => {
    this.props.reset();
    const buttons = document.getElementsByClassName("choiceBtn");

    Array.prototype.forEach.call(buttons, button => (button.disabled = false));
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-danger mt-2 mr-4 mb-3"
        onClick={e => this.handleStartOver()}
      >
        Reset Choices
      </button>
    );
  }
}

export default connect(null, { reset })(StartOver);
