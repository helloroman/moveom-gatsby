import React from 'react';
import styled from 'styled-components';

import { media } from 'utils/media';
import Logo from 'components/Atoms/Logo';
import Navigation from 'components/Molecules/Navigation';

const StyledHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;

  ${media.tablet`
    flex-flow: column;
    justify-content: center;
  `};
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
