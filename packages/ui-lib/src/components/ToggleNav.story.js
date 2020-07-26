import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ToggleNav from './ToggleNav';

storiesOf('ToggleNav', module)
  .addDecorator(withKnobs)
  .add('default', () => <ToggleNav />);
