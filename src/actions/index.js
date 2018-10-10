export const DISPLAY_KEY = 'display_key';

export function displayKey(id) {
  return {
    type: DISPLAY_KEY,
    payload: id
  }
}
