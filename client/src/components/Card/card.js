import React from "react";
import "./card.css";
import { connect } from "react-redux";
import { addQuestion } from "../../utils/actions";

class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", value: "", disabled: false };
  }

  handleAddQuestion = (value1, value2) => {
    this.setState({ name: value1, value: value2 }, () => {
      this.props.addQuestion(this.state.name, this.state.value);
    });
    this.setState({ disabled: !this.state.disabled });
  };

  render() {
    return (
      <div className="company-card">
        <p>{this.props.title}</p>
        {this.props.choices.map((choice, index) => (
          <button
            key={index}
            value={`${choice.value}`}
            datavalue={this.props.name}
            disabled={this.state.disabled ? "disabled" : ""}
            onClick={e =>
              this.handleAddQuestion(
                e.target.getAttribute("datavalue"),
                e.target.value
              )
            }
            id="choiceBtn"
            className="choiceBtn"
          >
            {choice.value}
          </button>
        ))}
      </div>
    );
  }
}

export default connect(null, { addQuestion })(AddQuestions);
