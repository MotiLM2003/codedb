import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container__main'>
        <div>
          <Link to='/'>
            <img src={logo} alt='CodeDB Logo' />
          </Link>
        </div>
        <div className='footer-container__content'>
          <div className='footer-container__content-row'>
            <div>
              <Link to='/careers'> Career</Link>
            </div>
            <div>
              <Link to='/about'>About Us</Link>
            </div>
            <div>
              <Link to='/Announcement'>Press Announcement</Link>
            </div>
          </div>
          <div className='footer-container__content-row'>
            <div>
              <Link to='/terms'>Terms of Use</Link>
            </div>
            <div>
              <Link to='/privacy'>Privacy</Link>
            </div>
          </div>
          <div className='footer-container__content-row'>
            <div>
              <Link to='faqs'>FAQs</Link>
            </div>
            <div>
              <Link to='/contact'>Contact</Link>
            </div>
            <div>
              <Link to='/imprint'>Imprint</Link>
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
