import React from "react";

class Booking-Card extends React.Component {
  constructor(props) {
    super(props);
  }

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

export default Booking-Card;