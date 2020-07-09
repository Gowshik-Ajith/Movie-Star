import React from 'react';

import {connect} from 'react-redux';

import {toggleSearchbar} from '../../Redux/searchbar/searchbar.action';

import {HeaderContainer,ButtonContainer,HeadingContainer,LinkContainer,IconContainer} from './Header.styles';

const Header = ({title,toggleSearchbar}) => {
    return (
        <HeaderContainer>
          <LinkContainer href="index.html"><HeadingContainer>{title}</HeadingContainer></LinkContainer>
          <ButtonContainer onClick={toggleSearchbar}><IconContainer className="fa fa-search" /></ButtonContainer>
        </HeaderContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
  toggleSearchbar : () => dispatch(toggleSearchbar()) 
})

export default connect(null,mapDispatchToProps)(Header);

