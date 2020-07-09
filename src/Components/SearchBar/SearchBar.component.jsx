import React from 'react';

import {SearchBarContainer,InputContainer,ButtonContainer, ParaContainer} from "./SearchBar.styles"


export const SearchBar = ({className,callbk,callbk1,children}) => {
    return(
        <SearchBarContainer className={className}>
            <InputContainer type="search" size="50" placeholder="Enter movie name here..."  onChange={callbk1}/>
            <ButtonContainer type="button" onClick={callbk}>Search</ButtonContainer>
            <ParaContainer>{children}</ParaContainer>
        </SearchBarContainer>
    );
}