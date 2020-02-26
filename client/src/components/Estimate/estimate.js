import React from "react";
import store from "../../utils/index";
import {
    homeCleaning,
    officeCleaning,
    venueCleaning
} from "../../utils/questions";

class Estimate extends React.Component {
    state = { price: [] }

    componentDidMount() {
        this.observeStore(store, this.onChange);
    }

    onChange = (store, object) => {
        let totalPrice = 0;

        for (const property in store.items) {
            const name = store.items[property].name
            const value = store.items[property].text

            object.questions.forEach(element => {
                if (element.name === name) {
                    for (const choice in element.choices) {
                        if (element.choices[choice].value == value) {
                            let price = element.choices[choice].price
                            totalPrice += price;
                        }
                    }
                }
            });
        }
        return this.setState({price: totalPrice});
    }

    observeStore = (store, onChange) => {
        let currentState;
        function handleChange() {
            let nextState = store.getState();
            if (nextState !== currentState) {
                currentState = nextState;
                onChange(currentState, homeCleaning);
            }
        }
        let unsubscribe = store.subscribe(handleChange);
        handleChange();
        return unsubscribe;
    }

    render() {
        return (
            <div>
                <p>Current Price: ${this.state.price}</p>
            </div>
        )
    }

}

export default Estimate;



