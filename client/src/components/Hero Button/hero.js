import React from "react";
import {
  homeCleaning,
  officeCleaning,
  venueCleaning
} from "../../utils/questions";
import Questions from "../Questions/question";
import "./hero.css";

class Hero extends React.Component {
  constructor() {
    super();

    this.state = {
      homeQuestion: homeCleaning.questions,
      officeQuestions: officeCleaning.questions,
      venueQuestions: venueCleaning.questions,
      displayHomeQuestions: false,
      displayBusinessQuestions: false,
      displayVenueQuestions: false
    };
  }

  displayHomeQuestions = () => {
    this.setState({
      displayHomeQuestions: !this.state.displayHomeQuestions
    });
  };

  displayBusinessQuestions = () => {
    this.setState({
      displayBusinessQuestions: !this.state.displayBusinessQuestions
    });
  };

  displayVenueQuestions = () => {
    this.setState({
      displayVenueQuestions: !this.state.displayVenueQuestions
    });
  };

  displayReset = () => {
    this.setState({
      displayHomeQuestions: false,
      displayBusinessQuestions: false,
      displayVenueQuestions: false
    });
  };


  render() {
    const goBack = (
      <button type="button" className="btn" onClick={this.displayReset} >
        Go Back!
      </button>
    );

  

    let questions = null;

    if (this.state.displayHomeQuestions) {
      return (questions = (
        <div>
          {goBack}
          <Questions questions={homeCleaning.questions} />
        </div>
      ));
    } else if (this.state.displayBusinessQuestions) {
      questions = (
        <div>
          {goBack}
          <Questions questions={officeCleaning.questions} />
        </div>
      );
    } else if (this.state.displayVenueQuestions) {
      questions = (
        <div>
          {goBack}
          <Questions questions={venueCleaning.questions} />
        </div>
      );
    } else {
      questions = (
        <div>
          
          <button
            type="button"
            className="btn"
            onClick={this.displayHomeQuestions}
          >
            Home
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.displayBusinessQuestions}
          >
            Business
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.displayVenueQuestions}
          >
            Venue
          </button>
        </div>
      );
    }

    return <div>{questions}</div>;
  }
}

export default Hero;
