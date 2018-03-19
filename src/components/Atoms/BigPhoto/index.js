import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 20px 15px -10px rgba(0, 0, 0, 0.3);
`;

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };
  }

  handleMouseMove = e => e;

  render() {
    return <StyledImage onMouseMove={e => this.handleMouseMove} src="dupa" />;
  }
}

export default Image;
