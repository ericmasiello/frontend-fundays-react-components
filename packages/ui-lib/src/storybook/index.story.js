import React from 'react';
import { storiesOf } from '@storybook/react';
import '../styles/fonts.scss';
import '../styles/base.scss';
import './storybook-env.scss';
import styles from './indexStory.module.scss';

storiesOf('Welcome', module).add('<FrontendFundays/>', () => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.title}>Frontend Fundays 🤓</h1>
    </header>
  </div>
));
