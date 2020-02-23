"use_strict";
/*
 * action types
 */
export const ADD_QUESTION = "QUESTION";
/*
 * action creators
 */

export const addQuestion = (name, text) => ({
  type: ADD_QUESTION,
  name,
  text
});
