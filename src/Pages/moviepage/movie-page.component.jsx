import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {MovieCategory} from '../../Components/Moviecategory/MovieCategory.component';

import {hideSearchbar} from '../../Redux/searchbar/searchbar.action';
import {selectPopularMovies,selectTrendingMovies,selectUpcomingMovies} from '../../Redux/homepage/homepage.selector';

import SearchBar from '../../Components/SearchBar/SearchBar.component';

const MoviePage = ({popularMovies,trendingMovies,upcomingMovies,hideSearchbar}) => {
    useEffect(() => {
        hideSearchbar();
    },[]);
    return(
    <div>
        <SearchBar />
        <hr />
        <MovieCategory className = "resultArea" result={[...popularMovies,...trendingMovies,...upcomingMovies]}/>
     </div>
    )
}

const mapStateToProps = createStructuredSelector({
    popularMovies: selectPopularMovies,
    trendingMovies: selectTrendingMovies,
    upcomingMovies: selectUpcomingMovies
})

const mapDispatchToProps = (dispatch) => ({
    hideSearchbar: () => dispatch(hideSearchbar())
})

export default connect(mapStateToProps,mapDispatchToProps)(MoviePage);