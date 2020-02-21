"use_strict";

import { combineReducers } from "redux";

import { QUESTION, NEW } from "./actions";

function items(state = [], action) {
  switch (action.type) {
    case QUESTION:
      return [
        ...state,
        {
        value: action.value,
        price: action.price
        }
      ];
    case NEW:
      return [
        ...state,
        {
          bool: action.bool
        }
      ];
    default:
      return state;
  }
}

const cleaningApp = combineReducers({
  items
})

export default cleaningApp;
