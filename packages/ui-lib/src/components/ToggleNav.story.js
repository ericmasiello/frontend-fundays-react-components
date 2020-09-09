import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ToggleNav, ToggleButton, ToggleList, ToggleItem, ToggleLink, ToggleArrow } from './ToggleNav';

function CustomUI() {
  const { ...tbd } = useToggleNav();

  return (
    <nav>
      <button>Click me</button>
      <ul>
        <li>
          <a href="google.com">Google</a>
        </li>
      </ul>
    </nav>
  );
}

function Controller() {
  const [open, setOpen] = useState(false);
  const toggleOpen = (nextValue) => setOpen(nextValue);
  return (
    <>
      <button
        onClick={(event) => {
          event.stopPropagation();
          setOpen(!open);
        }}
      >
        Toggle it!
      </button>
      <ToggleNav open={open} onChange={toggleOpen}>
        <ToggleButton>Click Me</ToggleButton>
        <ToggleList>
          <ToggleItem>
            <ToggleLink href="google.com" className="foo" data-bar="baz">
              Google
            </ToggleLink>
          </ToggleItem>
        </ToggleList>
      </ToggleNav>
    </>
  );
}

storiesOf('ToggleNav', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <>
      <ToggleNav>
        <ToggleButton onClick={() => alert('hi')}>
          Click Me <ToggleArrow />
        </ToggleButton>
        <ToggleList>
          <ToggleItem>
            <ToggleLink href="google.com" className="foo" data-bar="baz">
              Google
            </ToggleLink>
          </ToggleItem>
          <ToggleItem>
            <ToggleLink component="button">The modal</ToggleLink>
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
      <select>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <br />
      <p>lorem ipsum dolar alkvalsf jasld lasjfls</p>
    </>
  ))
  .add('example control', () => {
    return <Controller />;
  });
