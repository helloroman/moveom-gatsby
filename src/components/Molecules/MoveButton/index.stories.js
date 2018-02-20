import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import MoveButton from './';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('Molecules', module).add('Move Button', () => (
  <Wrapper>
    <MoveButton />
  </Wrapper>
));
