import React from 'react';

import notFoundBackground from '../../images/404-1.svg';
import n404 from '../../images/404.svg';
const NotFound = () => {
  return (
    <div className='not-found'>
      <div
        className='not-found__container flex justify-center align-center position-relative'
        style={{ minHeight: '65vh' }}
      >
        <img src={notFoundBackground} alt='not found' />
        <img src={n404} alt='404' className='not-found__404' />
      </div>
    </div>
  );
};

export default NotFound;
