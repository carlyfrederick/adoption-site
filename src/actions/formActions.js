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

export function showConfirmation() {
    return {
        type: types.SHOW_CONFIRMATION,
        open: true,
    };
}

export function closeConfirmation() {
    return {
        type: types.CLOSE_CONFIRMATION,
        open: false,
    };
}