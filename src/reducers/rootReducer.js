import { combineReducers } from 'redux';
import form from './formReducer';
import sizing from './sizingReducer';

const rootReducer = combineReducers({
  form,
  sizing
});

export default rootReducer;