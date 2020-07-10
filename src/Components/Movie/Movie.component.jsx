import React from 'react';

import {Link} from 'react-router-dom';

import {FigureCaptionContainer,ImageContainer} from './Movie.styles';

export const Movie = ({src,title}) => {
    return (
        <figure>
            <Link to={`/movies/${title}`}>
                <ImageContainer src={src} alt={title} title={title}/>
            </Link>
            <FigureCaptionContainer>{title}</FigureCaptionContainer>
        </figure>
    );
}