import React from 'react';
import styles from './ToggleNav.module.scss';

export function ToggleNav(props) {
  const { children } = props;

  return <nav>{children}</nav>;
}

export function ToggleButton(props) {
  const { children } = props;

  return <button>{children}</button>;
}

export function ToggleList(props) {
  const { children } = props;

  return <ul>{children}</ul>;
}

export function ToggleItem(props) {
  const { children } = props;

  return <li>{children}</li>;
}

export function ToggleLink(props) {
  const { children } = props;

  return <a>{children}</a>;
}
