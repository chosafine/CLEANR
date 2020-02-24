'use_strict';

/*
 * action types
 */
export const ADD_QUESTION = 'QUESTION';
export const RESET = 'RESET';
/*
 * action creators
 */

export const reset = () => ({
  type: 'RESET',
});

export const addQuestion = (name, text) => ({
  type: ADD_QUESTION,
  name,
  text,
});
