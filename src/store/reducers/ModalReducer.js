/**
 * Created by User on 24.07.2018.
 */

import {
    MODAL_ACTIONS
} from '../../actions/type';

export default function (state = false, action) {

    switch (action.type){
        case MODAL_ACTIONS: return !state;

        default: return state;
    }
}