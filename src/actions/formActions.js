import * as types from './actionTypes';


export function openForm() {
    return {
        type: types.OPEN_FORM,
        open: true,
    };
}

export function closeForm() {
    return {
        type: types.CLOSE_FORM,
        open: false,
    };
}