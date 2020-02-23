"use_strict";
/*
 * action types
 */
export const ADD_QUESTION = "QUESTION";
/*
 * action creators
 */

export const addQuestion = text => ({
  type: ADD_QUESTION,
  text
});
