import {actionTypes} from './searchbar.action.types';

const INITIAL_STATE = {
    isHidden: true,
    searchValue: ''
};

export const searchbarReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SEARCHBAR:
            return {
                ...state,
                isHidden: !state.isHidden,
            }
        case actionTypes.UPDATE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        default:
            return state;
    }
}