import React,{useEffect} from 'react';
import {connect} from 'react-redux';

import {MovieCategory} from '../../Components/Moviecategory/MovieCategory.component';

import {fetchMovieAsync} from '../../Redux/homepage/homepage.action';

const HomePage = ({fetchMovieAsync,popularMovies,trendingMovies,upcomingMovies}) => {
    useEffect(() => {
        fetchMovieAsync("popular");
        fetchMovieAsync("top_rated");
        fetchMovieAsync("upcoming");
    },[]);
    return(
    <div>
        <MovieCategory className = "MovieCategory" heading="Popular" result={popularMovies}/>
        <MovieCategory className = "MovieCategory" heading="Trending" result={trendingMovies}/>
        <MovieCategory className = "MovieCategory" heading="Upcoming" result={upcomingMovies}/>
     </div>
    )
}

const mapStateToProps = (state) => ({
    popularMovies: state.homepage.popular.movieList,
    trendingMovies: state.homepage.top_rated.movieList,
    upcomingMovies: state.homepage.upcoming.movieList
})

const mapDispatchToProps = (dispatch) => ({
    fetchMovieAsync: (movieCategory) => dispatch(fetchMovieAsync(movieCategory))
}
)
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);