import {combineReducers} from 'redux';

import {homepageReducer} from './homepage/homepage.reducer';
import {searchbarReducer} from './searchbar/searchbar.reducer';

export const rootReducer = combineReducers(
    {
    homepage: homepageReducer,
    searchbar: searchbarReducer
    }
)