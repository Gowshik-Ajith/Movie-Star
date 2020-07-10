import {createSelector} from 'reselect';

const selectHomepage = state => state.homepage;

const selectPopular = createSelector(
    [selectHomepage],
    homepage => homepage.popular
);

const selectTrending = createSelector(
    [selectHomepage],
    homepage => homepage.top_rated
);

const selectUpcoming = createSelector(
    [selectHomepage],
    homepage => homepage.upcoming
);

const selectSearch = createSelector(
    [selectHomepage],
    homepage => homepage.search
);

export const selectPopularMovies = createSelector(
    [selectPopular],
    popular => popular.movieList
);

export const selectTrendingMovies = createSelector(
    [selectTrending],
    trending => trending.movieList
);

export const selectUpcomingMovies = createSelector(
    [selectUpcoming],
    upcoming => upcoming.movieList
);

export const selectSearchMovies = createSelector(
    [selectSearch],
    search => search.movieList
);

export const selectMovieData = createSelector(
    [selectHomepage],
    homepage => homepage.movieData
);
