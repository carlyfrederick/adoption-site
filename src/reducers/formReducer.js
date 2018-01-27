import { fromJS } from 'immutable';

import initialState from './initialState';
import {
    OPEN_FORM,
    CLOSE_FORM
} from '../actions/actionTypes';

export default function form(state = fromJS(initialState), action) {
  let newState = state;
  switch (action.type) {
    case OPEN_FORM:
    case CLOSE_FORM:
        return newState.set('formOpen', action.open);
    default:
        return newState;
  }
}