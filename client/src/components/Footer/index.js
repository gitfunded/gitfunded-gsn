import React from 'react';
import styles from './footer.module.scss';
// import logo from './logo-red.png'
import mail from './mail.svg';
import twitter from './twitter.svg';
import github from './github.svg';
import zeppelin from './zeppelin_logo.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.brand}>
      <div className={styles.copyright}>Powered by:</div>
      <div className={styles.created}>
        <a href="https://gitfunded.consensolabs.com/" rel="noopener noreferrer" target="_blank">
          <img style={{ width: '171px', height: 'auto', marginLeft: '10px' }} src={zeppelin} alt="OpenZeppelin" />
        </a>
      </div>

    </div>
    <div className={styles.links}>
      <a href="mailto:info@consensolabs.com" target="_blank" rel="noopener noreferrer">
        <img src={mail} alt="email" />
      </a>
      <a href="https://twitter.com/consensolabs" rel="noopener noreferrer" target="_blank">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="https://github.com/gitfunded" rel="noopener noreferrer" target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  </footer>
);

export default Footer;

