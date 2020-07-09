import styled, {css} from 'styled-components';

export const HeadingContainer = styled.h2`
    color: white;   
`;

export const ResultAreaContainer = css`
    margin : auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-evenly;
    margin-bottom: 30px;
`;

export const MovieCategoryContainer = css`
    margin: auto;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow: scroll;
`;

const classSelector = ({className}) => {
    if(className === "resultArea")
    {
        return ResultAreaContainer;
    }
    else
    {
        return MovieCategoryContainer;
    }
}

export const CategoryContainer = styled.div`
    ${classSelector};
`;


