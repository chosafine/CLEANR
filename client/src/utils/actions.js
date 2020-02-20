"use_strict";
/*
 * action types
 */
export const QUESTION = "QUESTION";
export const NEW = "NEW";
export const SET_NEXT_QUESTION = "SET_NEXT_QUESTION";
/*
 * action creators
 */
export function addQuestion(value, price) {
  return {
    type: QUESTION,
    value,
    price
  };
}
export function addNew(bool) {
  return { type: NEW, bool };
}

export function setNextQuestion(question) {
  return { type: SET_NEXT_QUESTION, question };
}