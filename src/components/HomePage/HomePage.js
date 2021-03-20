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
              <p className='home-page__hero-text font-weight-700 font-size-38 p-0'>
                CodeDB -
              </p>
              <p className='home-page__hero-text font-weight-200 font-size-35 p-0 letter-spacing-3'>
                Database for
              </p>
              <p className='home-page__hero-text font-weight-200 font-size-35 p-0 letter-spacing-3'>
                your source codes
              </p>
              <p className='home-page__hero-text font-weight-200 font-size-16 p-0 w-600 mt-6 line-height-29 font-family-dm-sans'>
                Archive code snippets and make them available for others… For
                the next project, you have your best solutions right at hand
                without having to search for them.
              </p>
              <div className='mt-8'>
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
            <div class='flex justify-center  '>
              <div className='home-page__card-item bg-variant-7  rounded'>
                <div class='flex direction-column gap-05 align-items-center justify-center'>
                  <div className='home-page__title color-black'>
                    Learning a new
                  </div>
                  <div className='home-page__title color-black'>
                    programming language?
                  </div>
                  <div className='home-page__title-small mt-2'>
                    ...Then first orient yourself
                  </div>
                  <div className='home-page__title-small'>
                    on the examples of others.
                  </div>
                  <div className='mt-4'>
                    <button className='button bg-primary'>Start</button>
                  </div>
                </div>
              </div>
            </div>
            <div class='flex justify-center  '>
              <div className='bg-secondary  rounded home-page__card-item'>
                <div class='flex direction-column gap-05 align-items-center justify-center'>
                  <div className='home-page__title color-white'>Accelerate</div>
                  <div className='home-page__title color-white'>
                    your project!
                  </div>
                  <div className='home-page__title-small mt-2 color-white'>
                    You don't have to test source codes that
                  </div>
                  <div className='home-page__title-small color-white'>
                    already run error-free for others.
                  </div>
                  <div className='mt-4'>
                    <button className='button bg-primary'>Start</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='wrapper mt-14'>
        <div className='home-page__hiw flex justify-center'>
          <div className='flex direction-column'>
            <div className='text-align-center font-family-montserrat font-size-40 font-weight-700 color-dark'>
              How it works
            </div>
            <div className='text-align-center w-570 font-family-dm-sans font-size-16 mt-3'>
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
              ei, at nihil tantas platonem eos.
            </div>
          </div>
        </div>
        <div className='home-page__info-1 flex justify-space-around mt-12'>
          <div className='flex direction-column'>
            <div>circle</div>
            <div>text</div>
          </div>
          <div>
            <div>circle</div>
            <div>text</div>
          </div>
          <div>
            <div>circle</div>
            <div>text</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
