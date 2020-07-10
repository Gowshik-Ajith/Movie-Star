import {actionTypes} from './homepage.action.types';
import {URLparams} from './URLparams';

const {BASE_URL,API_KEY,lang} = URLparams;

const fetchMovieRequest = (movieCategory) => (
    {
        type: actionTypes.FETCH_MOVIE_REQUEST,
        category: movieCategory
    }
)

const fetchMovieSuccess = (movieList,movieCategory) => (
    {
        type: actionTypes.FETCH_MOVIE_SUCCESS,
        payload: movieList,
        category: movieCategory
    }
)

const fetchMovieFailure = (errorMessage,movieCategory) => (
    {
        type: actionTypes.FETCH_MOVIE_FAILURE,
        category: movieCategory
    }
)

export const fetchMovieAsync = (movieCategory,searchValue='') => {
    let url;
    movieCategory === 'search' ? 
    url = `${BASE_URL}/${movieCategory}/movie?api_key=${API_KEY}&language=${lang}&query=${searchValue}` :
    url = `${BASE_URL}/movie/${movieCategory}?api_key=${API_KEY}&language=${lang}` ; 
    console.log(url); 
    return (dispatch) => {
        dispatch(fetchMovieRequest(movieCategory));
        fetch(url)
        .then((response) => response.json())
        .then(({results}) => dispatch(fetchMovieSuccess(results,movieCategory)))
        .catch(({message}) => dispatch(fetchMovieFailure(message,movieCategory)));
    }
}