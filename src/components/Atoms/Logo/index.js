import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import logo_image from 'assets/img/moveom-logo.png';

const StyledImage = styled.img`
  width: 160px;

  ${media.phone`
    width: 150px;
  `};
`;

const Logo = () => {
  return <StyledImage src={logo_image} alt="moveom logo" />;
};

export default Logo;
