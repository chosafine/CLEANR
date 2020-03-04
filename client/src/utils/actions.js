//These are the actions for our store, right now we only have two
// one to add to the store and one to reset the entire store

/*
 * action types
 */
export const ADD_QUESTION = "QUESTION";
export const RESET = "RESET";

/*
 * action creators
 */
export const reset = () => ({
  type: "RESET"
});

export const addQuestion = (name, text) => ({
  type: ADD_QUESTION,
  name,
  text
});
