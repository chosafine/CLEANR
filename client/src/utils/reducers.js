'use_strict';

import { combineReducers } from 'redux';

import { ADD_QUESTION, RESET } from './actions';

function items(state = [], action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        {
          name: action.name,
          text: action.text,
        },
      ];
    case RESET:
      return (state = null);
    default:
      return state;
  }
}

const cleaningApp = combineReducers({
  items,
});

export default cleaningApp;
