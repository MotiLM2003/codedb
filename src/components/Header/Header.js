import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { moveUpDown, moveLeftRight } from '../../utils/variants';
import api from '../../apis/api';

import logo from '../../images/logo.png';

const Header = () => {
  const [languages, setLanguages] = useState(null);
  useEffect(() => {
    const getLanguages = async () => {
      const { data } = await api.get('get_language_menu');
      setLanguages(data);
    };

    getLanguages();
  }, []);

  return (
    <section className='header-container'>
      <div className='header-container__wrapper'>
        <div className='wrapper'>
          <Link to='/'>
            <img src={logo} alt='CodeDB Logo' className='wrapper__logo' />
          </Link>
          <div class='flex j-center header-container__toolbar gap-1'>
            <motion.div
              className='header-container__search-container'
              variants={moveLeftRight(-20)}
              initial='hidden'
              animate='visible'
            >
              <input type='text' placeholder='Search' />
              <i class='fas fa-search'></i>
            </motion.div>
            <motion.div
              variants={moveUpDown(-20)}
              initial='hidden'
              animate='visible'
            >
              <select>
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
          <motion.div className='wrapper__login'>
            <button className='button bg-secondary w-125'>Login</button>
            <button className='button bg-inverse-white  w-125'>Sign up</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
