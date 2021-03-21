import React from 'react';

import hero from '../../images/hero.jpg';
import envelop from '../../images/envelop.svg';
import heroSide from '../../images/home-page-hero-logo.svg';
import files from '../../images/files.svg';
import cube from '../../images/cube.svg';
const HomePage = () => {
  return (
    <div className='home-page'>
      <section className='home-page__hero'>
        <div className='home-page__hero-content'>
          <div className='flex justify-center  home-page__hero-container gap-2'>
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
        <div className='home-page__info-1 flex justify-space-around mt-16'>
          <div className='flex direction-column align-items-center gap-2'>
            <div>
              <div className='home-page__circle'>
                <img src={envelop} alt='title' />
              </div>
            </div>
            <div className='home-page__circle-text'>
              Upload your functions and code fragments you need more often
            </div>
          </div>
          <div>
            <div className='flex direction-column align-items-center gap-2'>
              <div>
                <div className='home-page__circle'>
                  <img src={files} alt='title' />
                </div>
              </div>
              <div className='home-page__circle-text'>
                Add your code pieces and those of others to your favourites
                list.
              </div>
            </div>
          </div>
          <div>
            <div className='flex direction-column align-items-center gap-2'>
              <div>
                <div className='home-page__circle'>
                  <img src={cube} alt='title' />
                </div>
              </div>
              <div className='home-page__circle-text'>
                Use your favorites list and our search for your next project to
                copy source code directly into your project rather than
                rewriting it completely yourself.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='wrapper mt-16'>
        <div className='home-page__bottom-card'>
          <div>
            Why Use <br />
            CodeDB?
          </div>
          <div className='flex direction-column gap-4'>
            <div className='font-family-dm-sans font-size-23 font-weight-700 color-dark'>
              As developers, we realized that we often search for source code
              from old projects, copy it and just adapt it.
            </div>
            <div className='font-size-16'>
              This way we need less time for debugging, since the code snippets
              basically already worked and we make far fewer mistakes by
              adapting them than if we completely rewrote the source code
              ourselves. However, searching old projects for a specific function
              not only requires a good memory, but is also quite cumbersome.
              That's why we developed a platform where we can upload these
              functions and pieces of code to quickly find them later and share
              good codes with others.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
