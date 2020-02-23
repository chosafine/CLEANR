import React from "react";
import "./card.css";
import { connect } from "react-redux";
import { addQuestion, reset } from "../../utils/actions";


class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  name: "",
    				value: "" };
    this.state = { disabled: false };
    
  }

  handleAddQuestion = (value1, value2) => {
    this.setState({ name: value1, value: value2 }, () => {
      this.props.addQuestion(this.state.name, this.state.value);
      this.setState({ disabled: !this.state.disabled });
    });
  };
  
  handleStartOver = () => {
      this.props.reset();
  }
  render = props => {
    const startOver = (
      <button type="button" className="btn" onClick={this.handleStartOver()}> Start Over!
      </button>
        );

    return (
      <div className="company-card">
        <p>{this.props.title}</p>
        {this.props.choices.map(choice => (
          <button
            key={`${choice.value}`}
            value={`${choice.value}`}
            datavalue={this.props.name}
            disabled={(this.state.disabled) ? "disabled" : ""}
            onClick={e => this.handleAddQuestion(e.target.getAttribute("datavalue"), e.target.value)}
            id="myBtn"
          >
            {choice.value}
          </button>
        ))}
        {startOver}
      </div>
    );
  };
}

export default connect(null, { addQuestion, reset })(AddQuestions);
