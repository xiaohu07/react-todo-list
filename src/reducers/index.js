import { combineReducers } from 'redux';
import answerReducer from './answers_reducer';

const rootReducer = combineReducers({
  answers: answerReducer
});

export default rootReducer;
