import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {homepageReducer} from './homepage/homepage.reducer';
import {searchbarReducer} from './searchbar/searchbar.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['homepage']
}


const rootReducer = combineReducers(
    {
    homepage: homepageReducer,
    searchbar: searchbarReducer
    }
)

export default persistReducer(persistConfig,rootReducer);