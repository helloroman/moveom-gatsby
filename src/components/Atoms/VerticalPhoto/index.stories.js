import React from 'react';
import { storiesOf } from '@storybook/react';

import VerticalPhoto from './';
import HeroImage from 'assets/img/heroimage.jpg';

storiesOf('Atoms', module).add('Vertical Photo', () => <VerticalPhoto photo={HeroImage}/>);
