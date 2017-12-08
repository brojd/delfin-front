import React from 'react';
import styles from './Sponsors.css';
import logo1 from './logos/jako.png';
import logo2 from './logos/cwirko.png';
import logo3 from './logos/redpepper.png';
import logo4 from './logos/smykala.png';
import logo5 from './logos/werona.png';


export default function Sponsors() {
  return (
    <div className="ui one column centered grid">
      <div className={`${styles.sponsors} fourteen wide column`}>
        <h2 className={styles.sponsorsHeading}>Sponsorzy</h2>
        <ul className={styles.logoList}>
          <li><img src={logo1} alt="logo" className={styles.logo} /></li>
          <li><img src={logo2} alt="logo" className={styles.logo} /></li>
          <li><img src={logo3} alt="logo" className={styles.logo} /></li>
          <li><img src={logo4} alt="logo" className={styles.logo} /></li>
          <li><img src={logo5} alt="logo" className={styles.logo} /></li>
        </ul>
        <ul className={styles.logoListSmallDevices}>
          <div className={styles.firstRow}>
            <li><img src={logo1} alt="logo" className={styles.logo} /></li>
            <li><img src={logo2} alt="logo" className={styles.logo} /></li>
          </div>
          <div className={styles.secondRow}>
            <li><img src={logo3} alt="logo" className={styles.logo} /></li>
            <li><img src={logo4} alt="logo" className={styles.logo} /></li>
            <li><img src={logo5} alt="logo" className={styles.logo} /></li>
          </div>
        </ul>
      </div>
    </div>
  )
}
