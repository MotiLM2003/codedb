import React from 'react';

import logo from '../../images/logo.svg';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container__main'>
        <div>
          <img src={logo} alt='CodeDB Logo' />
        </div>
        <div className='footer-container__content'>
          <div className='footer-container__content-row'>
            <div>
              <a href='#'>Career</a>
            </div>
            <div>
              <a href='#'>About Us</a>
            </div>
            <div>
              <a href='#'>Press Announcement</a>
            </div>
          </div>
          <div className='footer-container__content-row'>
            <div>
              <a href='#'>Terms of Use</a>
            </div>
            <div>
              <a href='#'>Privacy</a>
            </div>
          </div>
          <div className='footer-container__content-row'>
            <div>
              <a href='#'>FAQs</a>
            </div>
            <div>
              <a href='#'>Contact</a>
            </div>
            <div>
              <a href='#'>Imprint</a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-container__copyright'>
        &copy; Copyright 2021. CodeDB All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
