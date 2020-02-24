import React from "react";
import "./card.css";
import StartOver from "../Start Over/startover";
import { connect } from "react-redux";
import { addQuestion, reset } from "../../utils/actions";



class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { disabled: false }
  }

  handleAddQuestion = value => {
    this.setState({ value }, () => {
      this.props.addQuestion(this.state.value);
      this.setState({ disabled: !this.state.disabled })
    }); 
  };

    render() {
      return (
        <div className="company-card">
          <p>{this.props.title}</p>
          {this.props.choices.map(choice => (
            <button
              key={`${choice.value}`}
              value={`${choice.value}`}
              id="myBtn"
              disabled={(this.state.disabled) ? "disabled" : ""}
              onClick={e => this.handleAddQuestion(e.target.value)}
  
            >
              {choice.value}
            </button>
          ))}
          <StartOver />
        </div>
      );
  }
};

export default connect(null, { addQuestion, reset })(AddQuestions);
