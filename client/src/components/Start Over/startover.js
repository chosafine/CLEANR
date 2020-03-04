import React from "react";
import { connect } from "react-redux";
import { reset } from "../../utils/actions";
import store from "../../utils/index";

class startOver extends React.Component {
  handleStartOver = () => {
    this.props.reset();
    const buttons = document.getElementsByClassName("choiceBtn");

    Array.prototype.forEach.call(buttons, button => (button.disabled = false));

    console.log(store.getState());
  };

  render() {
    return (
      <button
        type="button"
        className="btn"
        onClick={e => this.handleStartOver()}
      >
        {" "}
        Start Over!{" "}
      </button>
    );
  }
}

export default connect(null, { reset })(startOver);
