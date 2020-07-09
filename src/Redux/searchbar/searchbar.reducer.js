import {actionTypes} from './searchbar.action.types';

const INITIAL_STATE = {
    isHidden: true
};

export const searchbarReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SEARCHBAR:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}