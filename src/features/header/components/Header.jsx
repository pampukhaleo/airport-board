import React from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '92px',
    padding: '0 50px',
    backgroundColor: '#1CB7EE',
  },
  imgLogo: {
    width: '150px',
    height: '50px',
  },
  navigation: {
    display: 'flex',
    color: 'white',
    listStyle: 'none',
  },
  navigationItem: {
    padding: '0 30px',
  },
};

const Header = () => (
  <div style={styles.header}>
    <img src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png" alt="logo" style={styles.imgLogo} />
    <ul style={styles.navigation}>
      <li style={styles.navigationItem}>Пасажирам</li>
      <li style={styles.navigationItem}>Послуги IEV</li>
      <li style={styles.navigationItem}>VIP</li>
      <li style={styles.navigationItem}>Партнерам</li>
      <li style={styles.navigationItem}>Пресцентр</li>
      <li style={styles.navigationItem}>UA</li>
    </ul>
  </div>
);

export default Header;
