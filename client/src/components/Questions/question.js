import React from 'react';
import Card from '../Card/card';
import Submit from '../Submit/submit';
import StartOver from "../Start Over/startover";
import Booking from "../Booking/booking";
import Estimate from "../Estimate/estimate";

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
    })
  }


  render() {
    const { questions } = this.props;

    const questionList = questions.map((question, index) => (
      <Card key={index} {...question} />
    ));

    const getEstimate = <button className="btn" onClick={this.nextQuote}>Get Free Quote!</button>;

    return (
      <div>
        {this.state.showCards ? <div>{questionList} <StartOver /> {getEstimate}</div> : null}
        {this.state.showBookingInfo ? <div><Estimate /> <Booking /> <Submit /> </div> : null};
     
  
      </div>
    );
  }
}


export default Question