import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {toggleSearchbar} from '../../Redux/searchbar/searchbar.action';

import {HeaderContainer,ButtonContainer,HeadingContainer,IconContainer} from './Header.styles';
import './Header.styles.css';

const Header = ({title,toggleSearchbar}) => {
    return (
        <HeaderContainer>
          <Link to="/" className="link"><HeadingContainer>{title}</HeadingContainer></Link>
          <ButtonContainer onClick={toggleSearchbar}><IconContainer className="fa fa-search" /></ButtonContainer>
        </HeaderContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
  toggleSearchbar : () => dispatch(toggleSearchbar()) 
})

export default connect(null,mapDispatchToProps)(Header);

