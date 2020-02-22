"use_strict";

import { combineReducers } from "redux";

import { ADD_QUESTION } from "./actions";

function items(state = [], action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        {
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
