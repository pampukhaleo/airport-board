import React from 'react';

const Header = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '92px',
      padding: '0 50px',
      backgroundColor: '#1CB7EE',
    }}
  >
    <img
      src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
      alt="logo"
      style={{ width: '150px', height: '50px' }}
    />
    <ul
      style={{
        display: 'flex',
        color: 'white',
        listStyle: 'none',
      }}
    >
      <li style={{ padding: '0 30px' }}>Пасажирам</li>
      <li style={{ padding: '0 30px' }}>Послуги IEV</li>
      <li style={{ padding: '0 30px' }}>VIP</li>
      <li style={{ padding: '0 30px' }}>Партнерам</li>
      <li style={{ padding: '0 30px' }}>Пресцентр</li>
      <li style={{ padding: '0 30px' }}>UA</li>
    </ul>
  </div>
);

export default Header;
