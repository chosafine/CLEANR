"use_strict";
/*
 * action types
 */
export const QUESTION = "QUESTION";
export const NEW = "NEW";
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