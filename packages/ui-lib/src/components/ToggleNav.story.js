import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('ToggleNav', module)
  .addDecorator(withKnobs)
  .add('default', () => <div>Hello world</div>);
