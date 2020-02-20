"use_strict";

import { combineReducers } from "redux";
import {
  ADD_ADDRESS,
  SQUARE_FT,
  FREQUENCY,
  NEXT,
  NOTES,
  RATE,
  NEW
} from "./actions";

function items(state = [], action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case SQUARE_FT:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case FREQUENCY:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case NEXT:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case NOTES:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case RATE:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case NEW:
      return [
        ...state,
        {
          text: action.text,
          completed: false
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
