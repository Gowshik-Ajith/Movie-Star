import React from 'react';

import {Link} from 'react-router-dom';

import {FigureCaptionContainer,ImageContainer} from './Movie.styles';

export const Movie = ({src,title}) => {
    const url=`/${title}`;
    return (
        <figure>
                <ImageContainer src={src} alt={title} title={title}/>

            <FigureCaptionContainer>{title}</FigureCaptionContainer>
        </figure>
    );
}