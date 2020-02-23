import React from "react";
import "./card.css";
import { connect } from "react-redux";
import { addQuestion } from "../../utils/actions";

class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleAddQuestion = value => {
    this.setState({ value }, () => {
      this.props.addQuestion(this.state.value);
    });
  };

  render = props => {
    return (
      <div className="company-card">
        <p>{this.props.title}</p>
        {this.props.choices.map(choice => (
          <button
            key={`${choice.value}`}
            value={`${choice.value}`}
            onClick={e => this.handleAddQuestion(e.target.value)}
          >
            {choice.value}
          </button>
        ))}
      </div>
    );
  };
}

export default connect(null, { addQuestion })(AddQuestions);
