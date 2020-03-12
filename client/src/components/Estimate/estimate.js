import React from "react";
import store from "../../utils/index";
import {
  homeCleaning,
  officeCleaning,
  venueCleaning
} from "../../utils/questions";
import Booking from "../Booking/booking";
import Signup from "./estimate-signup";
import cookie from "react-cookie";
import Submit from "../Submit/submit";

/* This component generates the estimated price for how much a user would pay
 for a cleaning service. In order to generate the price some logic has to be done.
 
 Firstly we are initializing a state with an empty price. We then import the store
 and Questions object (where the price values live) as we need to monitor the store.
 
 We have an onChange function that takes a store and question object as parameters.
 That function maps out the name of each question and the value chosen, we then
 go into the specific question and iterate through each value comparing it to
 the value the user has chosen and grab the price associated with it. We do this
 for all questions (name properties) in the store until we get a total price.
 That total price is then written to the empty price value in the store that is
 displayed on page.
 
 We also have an observeStore function that is a handler that calls the store
 and watches it for changes. Every time the store is updated we call the onChange
 function defined above. This is running for the entire lifespan of this component. */

class Estimate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: []
    };
  }

  componentDidMount() {
    this.observeStore(store, this.onChange);
  }

  onChange = (store, object) => {
    let totalPrice = 0;

    for (const property in store.items) {
      const name = store.items[property].name;
      const value = store.items[property].text;
      // eslint-disable-next-line
      object.questions.forEach(element => {
        if (element.name === name) {
          for (const choice in element.choices) {
            // eslint-disable-next-line
            if (element.choices[choice].value == value) {
              let price = element.choices[choice].price;
              totalPrice += price;
            }
          }
        }
      });
    }
    return this.setState({ price: totalPrice });
  };

  observeStore = (store, onChange) => {
    let typeOfCleaning;

    if (this.props.type === "home") {
      typeOfCleaning = homeCleaning;
    } else if (this.props.type === "business") {
      typeOfCleaning = officeCleaning;
    } else if (this.props.type === "venue") {
      typeOfCleaning = venueCleaning;
    }

    let currentState;
    function handleChange() {
      let nextState = store.getState();
      if (nextState !== currentState) {
        currentState = nextState;
        onChange(currentState, typeOfCleaning);
      }
    }
    let unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
  };

  render() {
    const session = cookie.load("connect.sid");

    let submitbutton;
    session
      ? (submitbutton = <Submit />)
      : (submitbutton = <Signup price={this.state.price} />);

    return (
      <div>
        <h4>
          <span className="font-weight-bold">
            Current Price: ${this.state.price}
          </span>
        </h4>
        <hr />
        <Booking />
        <hr />
        {submitbutton}
      </div>
    );
  }
}

export default Estimate;
