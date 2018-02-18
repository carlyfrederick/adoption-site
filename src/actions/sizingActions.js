import * as types from './actionTypes';


export function handleResize(size) {
    return {
        type: types.SET_WINDOW_WIDTH,
        width: size,
    };
}