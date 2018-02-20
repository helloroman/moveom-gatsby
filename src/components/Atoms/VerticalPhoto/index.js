import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
  width: 500px;
  height: 720px;
  background: url(${({ photo }) => photo}) no-repeat;
  background-size: 200%;
  background-position: 50%;
  box-shadow: 0 20px 40px -25px rgba(0, 0, 0, 0.5);
`;

export default StyledPhoto;
