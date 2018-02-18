import { fromJS } from 'immutable';
import initialState from './initialState';
import {
    SET_WINDOW_WIDTH
} from '../actions/actionTypes';

export default function sizing(state = fromJS(initialState), action) {
  let newState = state;
  switch (action.type) {
    case SET_WINDOW_WIDTH:
        return newState.set('windowWidth', action.width);
    default:
        return newState;
  }
}