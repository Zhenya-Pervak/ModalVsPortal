import {
    MODAL_ACTIONS
} from './type';

export function modalActions(modalState) {
    return ({
        type: MODAL_ACTIONS,
        payload: modalState
    });
}
