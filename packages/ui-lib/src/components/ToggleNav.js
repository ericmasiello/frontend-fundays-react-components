import React, { createContext, useState, useContext, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './ToggleNav.module.scss';

function callFnsInOrder(...fns) {
  return (event) => {
    fns.forEach((fn) => {
      if (!fn) {
        return;
      }
      fn(event);
    });
  };
}

function createButtonPropGetter({ open, setOpen, buttonRef }) {
  return (customProps = {}) => {
    const { onClick, ...rest } = customProps;
    return {
      ref: buttonRef,
      'aria-expanded': open,
      onClick: callFnsInOrder((event) => {
        event.stopPropagation();
        setOpen(!open);
      }, onClick),
      ...rest,
    };
  };
}

function createItemPropGetter({ buttonRef, setOpen }) {
  return (customProps = {}) => {
    const { onClick, ...rest } = customProps;
    return {
      onClick: callFnsInOrder(() => {
        setOpen(false);
        buttonRef.current.focus();
      }, onClick),
      ...rest,
    };
  };
}

function useAutoCloseToggle(config) {
  const { setOpen, autoClose = true } = config;

  useEffect(() => {
    const handleOutsideClick = () => {
      setOpen(false);
    };

    if (autoClose) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      if (autoClose) {
        window.removeEventListener('click', handleOutsideClick);
      }
    };
  }, [autoClose, setOpen]);
}

export function useToggleNav(config = {}) {
  const { autoClose } = config;
  let [open, setOpen] = useState(false);
  const buttonRef = useRef();

  useAutoCloseToggle({ autoClose, setOpen });

  const isControlled = typeof config.open === 'boolean' && typeof config.setOpen === 'function';

  open = isControlled ? config.open : open;
  setOpen = isControlled ? config.setOpen : setOpen;

  return {
    open,
    buttonProps: createButtonPropGetter({ open, setOpen, buttonRef }),
    itemProps: createItemPropGetter({ setOpen, buttonRef }),
  };
}

const ToggleContext = createContext({
  open: false,
  setOpen: () => {},
  buttonRef: React.createRef(),
});

export function ToggleProvider(props) {
  const { children, open: userOpen, onChange, autoClose } = props;
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();

  const isControlled = typeof open === 'boolean' && onChange;

  const value = useMemo(
    () => ({
      open: isControlled ? userOpen : open,
      setOpen: isControlled ? onChange : setOpen,
      buttonRef,
    }),
    [open, isControlled, userOpen, onChange]
  );

  useAutoCloseToggle({ autoClose, setOpen: value.setOpen });

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
}

export function ToggleNav(props) {
  const { children, open, onChange, autoClose } = props;

  return (
    <ToggleProvider open={open} onChange={onChange} autoClose={autoClose}>
      <nav className={styles.toggleNav}>{children}</nav>
    </ToggleProvider>
  );
}

export function ToggleButton(props) {
  const { className, component: Component = 'button', ...rest } = props;

  const { open, setOpen, buttonRef } = useContext(ToggleContext);
  const classes = classNames(styles.toggleButton, className);

  const buttonProps = createButtonPropGetter({ open, setOpen, buttonRef });

  return (
    <Component
      {...buttonProps({
        className: classes,
        ...rest,
      })}
    />
  );
}

export function ToggleList(props) {
  const { children } = props;

  const { open } = useContext(ToggleContext);

  return (
    <div className={styles.toggleListWrapper}>
      <ul className={styles.toggleList} hidden={!open}>
        {children}
      </ul>
    </div>
  );
}

export function ToggleItem(props) {
  return <li {...props} />;
}

export function ToggleLink(props) {
  const { className, component: Component = 'a', ...rest } = props;
  const { buttonRef, setOpen } = useContext(ToggleContext);
  const itemProps = createItemPropGetter({ buttonRef, setOpen });

  const classes = classNames(styles.toggleLink, className);

  return (
    <Component
      {...itemProps({
        className: classes,
        ...rest,
      })}
    />
  );
}

export function ToggleArrow() {
  return (
    <svg className={styles.toggleArrow} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.331 10.2567C12.9205 10.6262 12.8873 11.2585 13.2567 11.669L17.1546 16L13.2567 20.331C12.8873 20.7416 12.9205 21.3738 13.331 21.7433C13.7416 22.1128 14.3738 22.0795 14.7433 21.669L19.2433 16.669C19.5856 16.2887 19.5856 15.7113 19.2433 15.331L14.7433 10.331C14.3738 9.92053 13.7416 9.88726 13.331 10.2567Z"
        fill="#00111A"
      />
    </svg>
  );
}
