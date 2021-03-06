import {actionTypes} from './homepage.action.types';
import {keyAssignment} from './homepage.utils';

const INITIAL_STATE = {
    popular: {
        movieList: [],
        isFetching: false
    },
    top_rated: {
        movieList: [],
        isFetching: false
    },
    upcoming: {
        movieList: [],
        isFetching: false
    },
    search: {
        movieList: [],
        isFetching: false
    },
    movieData: {}
};

export const homepageReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case actionTypes.FETCH_MOVIE_REQUEST:
            return {
                ...state,
                [action.category]: {
                ...state[action.category],
                isFetching: true
                }
            };
        case actionTypes.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                [action.category]: {
                    movieList: action.payload,
                    isFetching: false
                },
                movieData: {...state.movieData,...keyAssignment(action.payload)}
            };
        case actionTypes.FETCH_MOVIE_FAILURE:
            return {
                ...state,
                [action.category]: {
                    ...state[action.category],
                    isFetching: false
                }
            };
        default:
            return state;
    }
}