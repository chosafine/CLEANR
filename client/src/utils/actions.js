/*
 * action types
 */
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const SQUARE_FT = 'SQUARE_FT'
export const FREQUENCY = 'FREQUENCY'
export const NEXT = 'NEXT'
export const NOTES = 'NOTES'
export const RATE = 'RATE'
export const NEW = 'NEW'
/*
 * action creators
 */
export function addAddress(text) {
  return { type: ADD_ADDRESS, text }
}
export function addSquareFt(text) {
  return { type: SQUARE_FT, text }
}
export function addFrequency(text) {
  return { type: FREQUENCY, text }
}
export function addNext(text) {
  return { type: NEXT, text }
}
export function addNotes(text) {
  return { type: NOTES, text }
}
export function addNew(text) {
  return { type: NEW, text }
}
