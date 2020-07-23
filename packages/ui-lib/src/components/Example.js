import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Example.module.scss';

function Example(props) {
  const { className = 'i-am-example', component: Component = 'div', ...rest } = props;
  const classes = classNames(styles.example, className);
  return <Component className={classes} {...rest} />;
}

Example.propTypes = {
  component: PropTypes.elementType,
};

export default Example;
