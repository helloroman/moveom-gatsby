import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Arrow from './';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

storiesOf('Atoms', module).add('Arrow', () => (
  <Wrapper>
    <Arrow />
    <Arrow length={'200'} />
    <Arrow length={'50'} />
  </Wrapper>
));
