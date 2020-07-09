import styled, {css} from 'styled-components';

export const SearchBarShowContainer = css`
    margin:5px;
    text-align: center;
`;

export const SearchBarHideContainer = css`
    margin:5px;
    text-align: center;
    display: none;
`;

const classSelector = ({className}) => {
    if(className === "searchbarShow")
    {
        return SearchBarShowContainer;
    }
    else
    {
        return SearchBarHideContainer;
    }
}

export const SearchBarContainer = styled.div`
    ${classSelector};
`;

export const ButtonContainer = styled.button`
    background-image: linear-gradient(to left, rgb(0, 255, 242), lightgreen);
    color: white;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    border: none;
    outline: none;
`;

export const InputContainer = styled.input`
    font-size:20px;
    padding: 10px;
    border: none;
    outline: none;
`;

export const ParaContainer = styled.p`
    text-align: center;
    color: aquamarine;
    font-family: 'Lobster';
    font-size: 45px;
    font-style: italic;
`;