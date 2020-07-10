import React from 'react';

import {URLparams} from '../../Redux/homepage/URLparams';

import NoMoviePoster from '../../NoMoviePoster.jpg';

import {Movie} from '../Movie/Movie.component';
import {CategoryContainer,HeadingContainer} from './MovieCategory.styles'



export const MovieCategory = ({heading,result,className}) => {
    const {BASE_IMAGE_URL} = URLparams;
    const movieList = result;
    return (
        <div className="Category">
        <HeadingContainer>{heading}</HeadingContainer>
        <CategoryContainer className = {className}>
            {
            movieList.map(({id,poster_path,title}) => {
                return poster_path ?
                (<Movie key={id} src={`${BASE_IMAGE_URL}${poster_path}`} title={title}/>) :
                (<Movie key={id} src={NoMoviePoster} title={title}/>);
            })};
        </CategoryContainer>
        </div>
    );
}
