import React,{useEffect} from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {fetchMovieAsync} from '../../Redux/homepage/homepage.action';
import {keyAssignment} from '../../Redux/homepage/homepage.utils';

import {MovieCategory} from '../../Components/Moviecategory/MovieCategory.component';
import {ParaContainer} from '../../Components/SearchBar/SearchBar.styles';

const SearchResultPage = ({match,search,popular,fetchMovieAsync}) => {
    const {params: {searchTitle}} = match;
    console.log(keyAssignment(popular));
    useEffect(() => {
        fetchMovieAsync('search',searchTitle);
    },[searchTitle]);
    return (   
        <div>
            <ParaContainer>
                {search.length > 0 ? `${search.length} Movies Found` : `No Movies Found`}
            </ParaContainer>
            <MovieCategory className = "resultArea" result={search}/>
        </div> 
    );
}

const mapStateToProps = (state) => ({
    search: state.homepage.search.movieList,
    popular: state.homepage.popular.movieList
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovieAsync: (movieCategory,searchValue) => dispatch(fetchMovieAsync(movieCategory,searchValue))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchResultPage));