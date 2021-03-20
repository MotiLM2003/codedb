import React from 'react';

import hero from '../../images/hero.jpg';
import heroSide from '../../images/home-page-hero-logo.svg';
const HomePage = () => {
  return (
    <div className='home-page'>
      <section className='home-page__hero'>
        <div className='home-page__hero-content'>
          <div className='flex justify-center home-page__hero-text gap-2'>
            <div className='flex direction-column'>
              <p className='home-page__hero-text font-weight-700 font-size-50 p-0'>
                CodeDB -
              </p>
              <p className='home-page__hero-text font-weight-200 font-size-47 p-0 letter-spacing-3'>
                Database for
              </p>
              <p className='home-page__hero-text font-weight-200 font-size-47 p-0 letter-spacing-3'>
                your source codes
              </p>
              <p className='home-page__hero-text font-weight-200 font-size-20 p-0 w-600 mt-6 line-height-29 font-family-dm-sans'>
                Archive code snippets and make them available for others… For
                the next project, you have your best solutions right at hand
                without having to search for them.
              </p>
              <div className='mt-82'>
                <button className='button yellow bg-primary'>Sign up</button>
              </div>
            </div>
            <div>
              <img src={heroSide} alt='Hero ' />
            </div>
          </div>
        </div>
      </section>

      <section className='wrapper home-page__card flex align-items-center justify-center '>
        <div className='card w-1000 bg-white'>
          <div className=' flex gap-3 justify-space-around align-items-center grow'>
            <div class='flex justify-center '>
              <div className='bg-secondary w-485 rounded'>box</div>
            </div>
            <div class='flex justify-center  '>
              <div className='bg-secondary w-485 rounded'>box</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
