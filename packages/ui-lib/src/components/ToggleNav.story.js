import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ToggleNav, ToggleButton, ToggleList, ToggleItem, ToggleLink } from './ToggleNav';

storiesOf('ToggleNav', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ToggleNav>
      <ToggleButton>Click Me</ToggleButton>
      <ToggleList>
        <ToggleItem>
          <ToggleLink href="google.com" className="foo" data-bar="baz">
            Google
          </ToggleLink>
        </ToggleItem>
        <ToggleItem>
          <ToggleLink href="google.com">Google</ToggleLink>
        </ToggleItem>
        <ToggleItem>
          <ToggleLink href="google.com">Google</ToggleLink>
        </ToggleItem>
        <ToggleItem>
          <ToggleLink href="google.com">Google</ToggleLink>
        </ToggleItem>
        <ToggleItem>
          <ToggleLink href="google.com">Google</ToggleLink>
        </ToggleItem>
      </ToggleList>
    </ToggleNav>
  ));
