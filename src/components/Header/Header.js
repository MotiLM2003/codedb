import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { moveUpDown, moveLeftRight } from '../../utils/variants';
import api from '../../apis/api';
import logo from '../../images/logo-full.png';

const Header = () => {
  const [languages, setLanguages] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const getLanguages = async () => {
      const { data } = await api.get('get_language_menu');
      setLanguages(data);
    };

    getLanguages();
  }, []);

  useEffect(() => {
    console.log('menu', isMenuOpen);
  }, [isMenuOpen]);
  return (
    <section className='header'>
      <div className='wrapper'>
        <div className='header__container'>
          <div className='header__content-container'>
            <div className='header__logo'>
              <Link to='/'>
                <img src={logo} alt='CodeDB Logo' className='wrapper__logo' />
              </Link>
            </div>
            <div className='header__content'>
              <motion.div
                className='header__search-container'
                variants={moveLeftRight(-20)}
                initial='hidden'
                animate='visible'
              >
                <input
                  type='text'
                  placeholder='Search'
                  className='header__input'
                />
                <i class='fas fa-search'></i>
              </motion.div>
              <motion.div
                variants={moveUpDown(-20)}
                initial='hidden'
                animate='visible'
              >
                <select className='header__input'>
                  <option value='0'>
                    {languages ? 'Select Language' : 'Loading'}
                  </option>
                  {languages &&
                    languages.map((language) => {
                      return (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      );
                    })}
                </select>
              </motion.div>
              <motion.div
                variants={moveLeftRight(20)}
                initial='hidden'
                animate='visible'
              >
                <button className='button bg-primary'>Search</button>
              </motion.div>
            </div>
            <div>
              <motion.div className='header__login'>
                <button className='button bg-secondary w-125'>Login</button>
                <button className='button bg-inverse-white  w-125'>
                  Sign up
                </button>
              </motion.div>
            </div>
          </div>
          <div className='header__humburger-container'>
            <div
              className='header__humburger-container'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <label
                labelfor='chbMenu'
                className={`header__humburger ${
                  !isMenuOpen ? '' : 'header__menu--closed'
                }`}
              >
                &nbsp;
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
