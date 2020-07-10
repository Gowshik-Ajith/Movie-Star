import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {URLparams} from '../../Redux/homepage/URLparams'

import NoMoviePoster from '../../NoMoviePoster.jpg';

import {Card} from '../../Components/Card/Card.component';
import {MovieInfoContainer,ImageContainer,HeadingContainer} from './movie-info-page.styles'

const MovieInfoPage = ({movieData,match}) => {
    const {params: {movieId}} = match;
    const {BASE_IMAGE_URL} = URLparams;
    console.log(movieData[movieId]);
    const {poster_path: posterPath,title,overview,release_date: releaseDate,vote_average: rating} = movieData[movieId];
    return (
        <MovieInfoContainer>
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


const mapStateToProps = (state) => ({
    movieData : state.homepage.movieData
})

export default withRouter(connect(mapStateToProps)(MovieInfoPage));