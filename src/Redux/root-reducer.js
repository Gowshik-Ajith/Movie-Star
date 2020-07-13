import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import {homepageReducer} from './homepage/homepage.reducer';
import {searchbarReducer} from './searchbar/searchbar.reducer';


const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['homepage']
}


const rootReducer = combineReducers(
    {
    homepage: homepageReducer,
    searchbar: searchbarReducer
    }
)

export default persistReducer(persistConfig,rootReducer);