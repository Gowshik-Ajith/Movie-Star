import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {MovieCategory} from '../../Components/Moviecategory/MovieCategory.component';

import {fetchMovieAsync} from '../../Redux/homepage/homepage.action';
import {hideSearchbar} from '../../Redux/searchbar/searchbar.action';
import {selectPopularMovies,selectTrendingMovies,selectUpcomingMovies} from '../../Redux/homepage/homepage.selector';

import SearchBar from '../../Components/SearchBar/SearchBar.component';

const HomePage = ({fetchMovieAsync,popularMovies,trendingMovies,upcomingMovies,hideSearchbar}) => {
    useEffect(() => {
        fetchMovieAsync("popular");
        fetchMovieAsync("top_rated");
        fetchMovieAsync("upcoming");
        hideSearchbar();
    },[]);
    return(
    <div>
        <SearchBar />
        <hr />
        <MovieCategory className = "MovieCategory" heading="Popular" result={popularMovies}/>
        <MovieCategory className = "MovieCategory" heading="Trending" result={trendingMovies}/>
        <MovieCategory className = "MovieCategory" heading="Upcoming" result={upcomingMovies}/>
     </div>
    )
}

const mapStateToProps = createStructuredSelector({
    popularMovies: selectPopularMovies,
    trendingMovies: selectTrendingMovies,
    upcomingMovies: selectUpcomingMovies
})

const mapDispatchToProps = (dispatch) => ({
    fetchMovieAsync: (movieCategory) => dispatch(fetchMovieAsync(movieCategory)),
    hideSearchbar: () => dispatch(hideSearchbar())
}
)
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);