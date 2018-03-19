import React from 'react';
import styled from 'styled-components';
import { Color } from 'utils/variables';
import { media } from 'utils/media';

const StyledHamburger = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 25px;
  height: 14px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    opacity: 0.1;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${Color.graphit};
  }

  .two {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  ${media.tablet`
    margin-top: 25px;
    margin-left: 0;
  `};
`;

const Hamburger = ({ open }) => {
  return (
    <StyledHamburger open={open}>
      <span className="one" />
      <span className="two" />
      <span className="three" />
    </StyledHamburger>
  );
};

export default Hamburger;
