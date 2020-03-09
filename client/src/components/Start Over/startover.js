import React from "react";
import { connect } from "react-redux";
import { reset } from "../../utils/actions";
import store from "../../utils/index";

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

    // For testing purposes we are logging out the new empty store
    // in the future this should be shown to the user on the page
    // to indiciate the operation was a success
    console.log(store.getState());
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary mt-2 mr-4"
        onClick={e => this.handleStartOver()}
      >
        {" "}
        Start Over!{" "}
      </button>
    );
  }
}

export default connect(null, { reset })(StartOver);
