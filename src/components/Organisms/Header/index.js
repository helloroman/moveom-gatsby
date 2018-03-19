import React from 'react';
import styled from 'styled-components';

import { media } from 'utils/media';
import Logo from 'components/Atoms/Logo';
import Navigation from 'components/Molecules/Navigation';
import Hamburger from 'components/Atoms/Hamburger';

const StyledHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;

  ${media.tablet`
  padding: 30px 10px;
  
  .open {
    flex-flow: column;
    justify-content: center;
    padding: 30px 0;
  }
  `};
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    console.log('fuck my life');
  };

  render() {
    return (
      <StyledHeader className={this.state.open ? 'open' : ''}>
        <Logo />
        <Hamburger
          open={this.state.open}
          onClick={() => this.setState({ open: !this.state.open })}
        />
        <Navigation open={this.state.open} />
      </StyledHeader>
    );
  }
}

export default Header;
