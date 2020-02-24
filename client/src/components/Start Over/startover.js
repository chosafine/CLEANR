import React from "react";
import { connect } from "react-redux";
import { reset } from "../../utils/actions";

class startOver extends React.Component {
  handleStartOver = () => {
    this.props.reset();
  };

  render() {
    return (
      <button type="button" className="btn" onClick={this.handleStartOver}>
        Start Over!
      </button>
    );
  }
}

export default connect(null, { reset })(startOver);
