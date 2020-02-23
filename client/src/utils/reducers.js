"use_strict";

import { combineReducers } from "redux";

import { ADD_QUESTION, RESET } from "./actions";

const INITIAL_STATE = {};

function items(state = [], action) {
  switch (action.type) {
    case RESET:
      return INITIAL_STATE
    case ADD_QUESTION:
      return [
        ...state,
        { 
          name: action.name,
          text: action.text
        }
      ];
    default:
      return state;
  }
}

const cleaningApp = combineReducers({
  items
});

export default cleaningApp;
