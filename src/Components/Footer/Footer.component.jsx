import React from 'react';

import {FooterContainer,ParaContainer,LinkContainer} from './Footer.styles';

export const Footer = ({content,link}) => {
    return (
    <FooterContainer>
      <ParaContainer>{`${content} `}<LinkContainer href="#">{link}</LinkContainer></ParaContainer>
    </FooterContainer>
    );
}