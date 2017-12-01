import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.stylesheet.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={logo}
           alt='logo'
           className={styles.Header_logo} />
      <span className={styles.Header_title}>SZKOLNA LIGA PŁYWACKA 2017/2018</span>
    </header>
  );
};

export default Header;
