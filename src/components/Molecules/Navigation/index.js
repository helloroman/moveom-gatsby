import React from 'react';
import styled from 'styled-components';

import { media } from 'utils/media';
import Link from 'components/Atoms/Link';

const StyledNavigation = styled.div`
  display: flex;

  ${media.tablet`
    margin-top: 20px;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  `};
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link>yoga class</Link>
      <Link>teacher</Link>
      <Link>one-on-one</Link>
      <Link>contact</Link>
    </StyledNavigation>
  );
};

export default Navigation;
