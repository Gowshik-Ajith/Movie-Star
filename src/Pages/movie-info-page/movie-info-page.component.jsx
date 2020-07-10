import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {URLparams} from '../../Redux/homepage/URLparams'

import NoMoviePoster from '../../NoMoviePoster.jpg';

import {hideSearchbar} from '../../Redux/searchbar/searchbar.action';
import {selectMovieData} from '../../Redux/homepage/homepage.selector';

import SearchBar from '../../Components/SearchBar/SearchBar.component';

import {Card} from '../../Components/Card/Card.component';
import {MovieInfoContainer,ImageContainer,HeadingContainer} from './movie-info-page.styles'

const MovieInfoPage = ({movieData,match,hideSearchbar}) => {
    useEffect(() => {
        hideSearchbar();
    },[]);
    const {params: {movieId}} = match;
    const {BASE_IMAGE_URL} = URLparams;
    const {poster_path: posterPath,title,overview,release_date: releaseDate,vote_average: rating} = movieData[movieId];
    return (
        <MovieInfoContainer>
            <SearchBar />
            <hr />
            <HeadingContainer>{title}</HeadingContainer>
            {
            posterPath ?
            <ImageContainer src = {`${BASE_IMAGE_URL}/${posterPath}`} alt={title}/> :
            <ImageContainer src = {NoMoviePoster} alt={title} /> 
            }
            <Card overview = {overview} rating= {rating} releaseDate = {releaseDate}/>
        </MovieInfoContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    movieData: selectMovieData
});

const mapDispatchToProps = (dispatch) => ({
    hideSearchbar: () => dispatch(hideSearchbar())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MovieInfoPage));