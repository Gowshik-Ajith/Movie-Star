import React from 'react';

import {CardContainer,HeadingContainer,ParaContainer} from './Card.styles';

export const Card = ({overview,releaseDate,rating}) => {
    return (
        <CardContainer>
            <HeadingContainer>Story</HeadingContainer>
            <ParaContainer>{overview}</ParaContainer>
            <HeadingContainer>Release Date</HeadingContainer>
            <ParaContainer>{releaseDate}</ParaContainer>
            <HeadingContainer>Rating</HeadingContainer>
            <ParaContainer>{rating}</ParaContainer>
        </CardContainer>
    );
}