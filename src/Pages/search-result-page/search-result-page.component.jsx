import React,{useEffect} from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {fetchMovieAsync} from '../../Redux/homepage/homepage.action';
import {selectSearchMovies} from '../../Redux/homepage/homepage.selector';

import {hideSearchbar} from '../../Redux/searchbar/searchbar.action';

import {MovieCategory} from '../../Components/Moviecategory/MovieCategory.component';
import {ParaContainer} from '../../Components/SearchBar/SearchBar.styles';

import SearchBar from '../../Components/SearchBar/SearchBar.component';

const SearchResultPage = ({match,search,fetchMovieAsync,hideSearchbar}) => {
    const {params: {searchTitle}} = match;
    useEffect(() => {
        fetchMovieAsync('search',searchTitle);
        hideSearchbar();
    },[searchTitle]);
    return (   
        <div>
            <SearchBar />
            <hr />
            <ParaContainer>
                {search.length > 0 ? `${search.length} Movies Found` : `No Movies Found`}
            </ParaContainer>
            <MovieCategory className = "resultArea" result={search}/>
        </div> 
    );
}

const mapStateToProps = createStructuredSelector({
    search: selectSearchMovies,
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovieAsync: (movieCategory,searchValue) => dispatch(fetchMovieAsync(movieCategory,searchValue)),
    hideSearchbar: () => dispatch(hideSearchbar())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchResultPage));