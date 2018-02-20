import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  margin-top: 50px;
  height: 10px;
  width: ${props => props.length};
`;

const Arrow = ({ length }) => {
  return (
    <StyledSvg length={length + 5}>
      <g stroke="#1A1919" fill="none" fillRule="evenodd" strokeLinecap="square">
        <path
          className="arrowhead"
          d={`M${length}.2 7.2l3.392-3.2L${length}.2 7.2zM${length}.2.8l3.392 3.2L${length}.2.8z`}
          strokeLinejoin="round"
        />
        <path className="line" d={`M1 4h${length}`} />
      </g>
    </StyledSvg>
  );
};

Arrow.defaultProps = {
  length: 100,
};

export default Arrow;
