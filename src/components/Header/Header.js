import React from 'react';

import logo from '../../images/logo.jpg';

const Header = () => {
  return (
    <section className='header-container'>
      <div className='header-container__wrapper'>
        <div className='wrapper'>
          <img src={logo} alt='CodeDB Logo' className='wrapper__logo' />
          <div class='flex j-center header-container__toolbar'>
            <div className='header-container__search-container'>
              <i class='fas fa-search'></i>
              <input type='text' placeholder='Search' />
            </div>
            <div>
              <select>
                <option value='0'>Language</option>
              </select>
            </div>
            <div>
              <button className='button bg-primary'>Search</button>
            </div>
          </div>
          <div className='wrapper__login'>
            <button className='button bg-secondary'>Login</button>
            <button className='button bg-inverse-variant-1'>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
