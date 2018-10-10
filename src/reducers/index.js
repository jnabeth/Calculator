import { combineReducers } from 'redux';
import KeyboardReducer from './reducer_keypad';

const rootReducer = combineReducers({
  keyboard: KeyboardReducer
});

export default rootReducer;
