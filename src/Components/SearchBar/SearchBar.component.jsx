import React from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import {selectIsHidden,selectSearchValue} from '../../Redux/searchbar/searchbar.selector';

import {SearchBarContainer,InputContainer,ButtonContainer} from "./SearchBar.styles";

import {updateSearchValue} from '../../Redux/searchbar/searchbar.action';


const SearchBar = ({isHidden,updateSearchValue,searchValue}) => {
    return(
        <SearchBarContainer className= {!isHidden ? "searchbarShow" : "searchbarHide" }>
            <InputContainer type="search" size="50" placeholder="Enter movie name here..." value={searchValue} onChange={updateSearchValue}/>
            <Link to={searchValue ? `/movies/search/${searchValue}` : `/movies`}><ButtonContainer type="button">Search</ButtonContainer></Link>
        </SearchBarContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    isHidden: selectIsHidden,
    searchValue: selectSearchValue
});

const mapDispatchToProps = (dispatch) => ({
    updateSearchValue: (e) => dispatch(updateSearchValue(e))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);