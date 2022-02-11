import React from 'react';
import './menu-item.styles.scss'

const MenuItem = () => (
  <div
    className='menu-item'
    onClick={() => alert('Clicked')}
  >
    <div className='content'>
      <h1 className='title'>YOU KNOW IT</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem
