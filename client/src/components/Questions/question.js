import React from "react";
import Card from "../Card/card";
import Submit from "../Submit/submit";
import StartOver from "../Start Over/startover";
import Estimate from "../Estimate/estimate";

/* This component servers as a controller, where we need to render out parts
 of the user onboarding flow depending on where the user is and what is given.
 We take the props given to use and then set a state of the onboarding cards
 to be shown the booking/confirmation page to be false.
 
 We then render out a list of cards for how many questions are in the questions
 object that is passed to us as a prop. We then define a button that will move
 the user to the booking/confirmation page.
 
 We grab four components to be rendered here, the card component so the value
 can be written to the store, the StartOver component so the user can reset
 their progress, the Estimate component so we can use the selected options
 in the store to give the user an accurate price, the booking component
 which is a datepicker than will give the store a proper date value for the
 business owner to see in their scheduling, and lastly a submit button
 that will take the final objects, merge them together and then send them to
 the database */

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCards: true,
      showBookingInfo: false
    };
  }

  nextQuote = () => {
    this.setState({
      showCards: false,
      showBookingInfo: true
    });
  };

  render() {
    const { questions } = this.props;

    const questionList = questions.map((question, index) => (
      <Card key={index} {...question} />
    ));

    const getEstimate = (
      <button className="btn btn-success mt-2" onClick={this.nextQuote}>
        Get Quote!
      </button>
    );

    return (
      <div>
        {this.state.showCards ? (
          <div>
            {questionList} <StartOver /> {getEstimate}
          </div>
        ) : null}
        {this.state.showBookingInfo ? (
          <div>
            <Estimate type={this.props.type} /> <Submit />{" "}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Question;
