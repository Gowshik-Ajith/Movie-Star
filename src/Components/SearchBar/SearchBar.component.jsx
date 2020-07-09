import React from 'react';

import {connect} from "react-redux";

import {SearchBarContainer,InputContainer,ButtonContainer, ParaContainer} from "./SearchBar.styles";


const SearchBar = ({isHidden,callbk,callbk1,children}) => {
    return(
        <SearchBarContainer className= {!isHidden ? "searchbarShow" : "searchbarHide" }>
            <InputContainer type="search" size="50" placeholder="Enter movie name here..."  onChange={callbk1}/>
            <ButtonContainer type="button" onClick={callbk}>Search</ButtonContainer>
            <ParaContainer>{children}</ParaContainer>
        </SearchBarContainer>
    );
}

const mapStateToProps = (state) => ({
    isHidden: state.searchbar.isHidden
});

export default connect(mapStateToProps)(SearchBar);