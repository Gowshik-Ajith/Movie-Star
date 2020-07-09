import React from 'react';

import {Movie} from '../Movie/Movie.component';

import NoMoviePoster from '../../NoMoviePoster.jpg';

import {CategoryContainer,HeadingContainer} from './MovieCategory.styles'



export const MovieCategory = ({heading,result,className}) => {
    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w780";
    const movieList = result;
    return (
        <div className="Category">
        <HeadingContainer>{heading}</HeadingContainer>
        <CategoryContainer className = {className}>
            {movieList.map(({id,poster_path,title}) => {
                return poster_path ?
                (<Movie key={id} src={`${BASE_IMAGE_URL}${poster_path}`} title={title}/>) :
                (<Movie key={id} src={NoMoviePoster} title={title}/>);
            })};
        </CategoryContainer>
        </div>
    );
}
