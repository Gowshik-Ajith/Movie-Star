import {actionTypes} from './searchbar.action.types';

export const toggleSearchbar = () => (
    {
        type: actionTypes.TOGGLE_SEARCHBAR
    }
)

export const updateSearchValue = (e) => (
    {
        type: actionTypes.UPDATE_SEARCH_VALUE,
        payload: e.target.value
    }
)

export const hideSearchbar = () => (
    {
        type: actionTypes.HIDE_SEARCHBAR
    }
)