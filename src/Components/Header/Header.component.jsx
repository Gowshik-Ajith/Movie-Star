import React from 'react';

import {connect} from 'react-redux';

import {HeaderContainer,ButtonContainer,HeadingContainer,LinkContainer,IconContainer} from './Header.styles';

const Header = ({title,callbk}) => {
    return (
        <HeaderContainer>
          <LinkContainer href="index.html"><HeadingContainer>{title}</HeadingContainer></LinkContainer>
          <ButtonContainer onClick={callbk}><IconContainer className="fa fa-search" /></ButtonContainer>
        </HeaderContainer>
    );
}

// const mapStateToProps = (state) => ({
//   a : state.homepage.a
// })

// export default connect(mapStateToProps)(Header);

export default Header;

