import React from 'react';

import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import {SearchBarContainer,InputContainer,ButtonContainer} from "./SearchBar.styles";

import {updateSearchValue} from '../../Redux/searchbar/searchbar.action';


const SearchBar = ({isHidden,updateSearchValue,searchValue}) => {
    return(
        <SearchBarContainer className= {!isHidden ? "searchbarShow" : "searchbarHide" }>
            <InputContainer type="search" size="50" placeholder="Enter movie name here..."  onChange={updateSearchValue}/>
            <Link to={`/movies/search/${searchValue}`}><ButtonContainer type="button" >Search</ButtonContainer></Link>
        </SearchBarContainer>
    );
}

const mapStateToProps = (state) => ({
    isHidden: state.searchbar.isHidden,
    searchValue: state.searchbar.searchValue
});

const mapDispatchToProps = (dispatch) => ({
    updateSearchValue: (e) => dispatch(updateSearchValue(e))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);