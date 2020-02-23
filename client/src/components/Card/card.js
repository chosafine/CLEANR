import React from "react";
import "./card.css";
import { connect } from "react-redux";
import { addQuestion } from "../../utils/actions";

class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  name: "",
    				value: "" };
    
  }

  handleAddQuestion = (value1, value2) => {
    this.setState({ name: value1, value: value2 }, () => {
      this.props.addQuestion(this.state.name, this.state.value);
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
            datavalue={this.props.name}
            onClick={e => this.handleAddQuestion(e.target.getAttribute("datavalue"), e.target.value)}
          >
            {choice.value}
          </button>
        ))}
      </div>
    );
  };
}

export default connect(null, { addQuestion })(AddQuestions);
