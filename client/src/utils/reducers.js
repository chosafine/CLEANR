"use_strict";

import { combineReducers } from "redux";

import { QUESTION, NEW, SET_NEXT_QUESTION } from "./actions";

function nextQuestion(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_NEXT_QUESTION:
      return action.filter
    default:
      return state
  }
}

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
  nextQuestion,
  items
})

export default cleaningApp;
