import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import styles from './ToggleNav.module.scss';

const ToggleContext = createContext();

export function ToggleProvider(props) {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const value = useMemo(() => ({ open, setOpen }), [open]);

  useEffect(() => {
    window.addEventListener('click', () => {
      setOpen(false);
    });

    // TODO: clean up the event listener....
  }, []);

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
}

export function ToggleNav(props) {
  const { children } = props;

  return (
    <ToggleProvider>
      <nav>{children}</nav>
    </ToggleProvider>
  );
}

export function ToggleButton(props) {
  const { children } = props;

  const { open, setOpen } = useContext(ToggleContext);

  return (
    <button
      aria-expanded={open}
      onClick={(event) => {
        event.stopPropagation();
        setOpen(!open);
      }}
    >
      {children}
    </button>
  );
}

export function ToggleList(props) {
  const { children } = props;

  const { open } = useContext(ToggleContext);

  return <ul hidden={!open}>{children}</ul>;
}

export function ToggleItem(props) {
  const { children } = props;

  return <li>{children}</li>;
}

export function ToggleLink(props) {
  return <a {...props} />;
}
