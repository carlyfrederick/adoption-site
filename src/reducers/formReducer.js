import initialState from './initialState';
import {
    OPEN_FORM,
    CLOSE_FORM
} from '../actions/actionTypes';

export default function form(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case OPEN_FORM:
    case CLOSE_FORM:
        newState.formOpen = action.open;
        return newState;
    default:
        return newState;
  }
}