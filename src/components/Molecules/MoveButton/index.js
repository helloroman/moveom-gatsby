import React from 'react';
import styled from 'styled-components';
import ArrowSVG from 'assets/img/arrow.svg';

const Arrow = styled.svg`
  width: 300px;
  height: auto;
`;

const MoveButton = () => {
  return (
    <div>
      <Arrow />
    </div>
  );
};

export default MoveButton;
