import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ToggleNav, ToggleButton, ToggleList, ToggleItem, ToggleLink, ToggleArrow } from './ToggleNav';

// TODO:
function Controller() {
  const [value, setValue] = useState('Eric');

  return <input value={value} onChange={(event) => setValue(event.target.value)} />;
}

storiesOf('ToggleNav', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ToggleNav>
      <ToggleButton>
        Click Me <ToggleArrow />
      </ToggleButton>
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
  ))
  .add('example control', () => {
    return <Controller />;
  });
