import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ToggleNav, ToggleButton, ToggleList, ToggleItem, ToggleLink, ToggleArrow, useToggleNav } from './ToggleNav';

function PropGetter() {
  const { open, buttonProps, itemProps } = useToggleNav();
  return (
    <nav>
      <style>
        {`
          .foo {
            border: 3px solid green;
            background: white;
          }
        `}
      </style>
      <button
        {...buttonProps({
          onClick() {
            console.log('clicked the button');
          },
          className: 'foo',
        })}
      >
        Click me
      </button>
      {open && (
        <ul>
          <li>
            <button
              {...itemProps({
                className: 'foo',
                onClick() {
                  console.log('clicked the item');
                },
              })}
            >
              First
            </button>
          </li>
          <li>
            <button {...itemProps()}>Second</button>
          </li>
        </ul>
      )}
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
        <ToggleButton onClick={() => console.log('hi')}>
          Click Me <ToggleArrow />
        </ToggleButton>
        <ToggleList>
          <ToggleItem>
            <ToggleLink href="google.com" className="foo" data-bar="baz">
              Google
            </ToggleLink>
          </ToggleItem>
          <ToggleItem>
            <ToggleLink
              onClick={() => {
                console.log('clicking the modal');
              }}
              component="button"
            >
              The modal
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
  .add('disable autoClose', () => (
    <ToggleNav autoClose={false}>
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
          <ToggleLink component="button">The modal</ToggleLink>
        </ToggleItem>
        <ToggleItem>
          <ToggleLink href="google.com">Google</ToggleLink>
        </ToggleItem>
      </ToggleList>
    </ToggleNav>
  ))
  .add('example control', () => {
    return <Controller />;
  })
  .add('prop getter', () => {
    return <PropGetter />;
  });
