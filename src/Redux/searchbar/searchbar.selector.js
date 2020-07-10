import {createSelector} from 'reselect';

const selectSearchbar = state => state.searchbar;

export const selectIsHidden = createSelector(
    [selectSearchbar],
    searchbar => searchbar.isHidden
);

export const selectSearchValue = createSelector(
    [selectSearchbar],
    searchbar => searchbar.searchValue
);

