// We will call our actions from ./actions and create a reducer
// that switches on what type of action being sent to the reducer
// and fires the specific pure function to update the store
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
      return ( state = [] );
    default:
      return state;
  }
}

const cleaningApp = combineReducers({
  items,
});

export default cleaningApp;
