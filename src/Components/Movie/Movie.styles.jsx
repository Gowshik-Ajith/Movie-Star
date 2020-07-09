import styled from 'styled-components';

export const ImageContainer = styled.img`
    width: 200px;
    height: 250px;
    border: 1px solid white;
    border-radius:10px;
    transition: 0.25 ease-in ;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`;

export const FigureCaptionContainer = styled.figcaption`
    color: white;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 200px;
    max-height: auto;
`;