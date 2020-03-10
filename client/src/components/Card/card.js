import React from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../utils/actions";

/* This component takes in props of a question from the questions object in the
 Questions component. We then write the question name to the page and take the
 potential values and map them out to buttons on the card so the user can pick
 which value they would like during the onboarding flow.
 
 We also set up an initial state of an empty name and value with if the buttons
 are disabled to being false. We want it to be false as during the handleAddQuestion
 function we disable the buttons are the user has selected their choice.
 
 In order to get the value selected into the Redux store, we are importing our
 addQuestion action from our actions, and we also are connecting to the store
 on component load. Once a value is clicked we then take the name of the option
 and value and put it into the state, and then take those state values and pass them
 into our store using the action. We do this as we're not able to explicitly read the
 value from the page. */

class Card extends React.Component {
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
      <div className="company-card card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
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
              className="btn btn-primary choiceBtn"
              style={{ marginLeft: "10px" }}
            >
              {choice.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(null, { addQuestion })(Card);
