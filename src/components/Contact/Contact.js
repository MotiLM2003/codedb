import React from 'react';

import PageHeader from '../PageHeader/PageHeader';
const Contact = () => {
  return (
    <div className='contact-page'>
      <PageHeader text='Contact' />
      <section className='contact-page__form-contaienr wrapper '>
        <div className='flex direction-column justify-content-center align-items-center justify-content-center font-size-16'>
          <p>
            Feel free to email us at:
            <a href='mailto:info@codedb.de'>info@codedb.de</a>
          </p>
          <h2 className='color-dark font-weight-700 font-family-dm-sans font-size-30 shadow-bold-1 mt-2'>
            Get in touch
          </h2>

          <form className='w-450 mt-6 flex direction-column gap-2 justify-content-center align-items-center'>
            <input type='text' className='' placeholder='Your name'></input>
            <input type='text' className='' placeholder='Your e-mail'></input>
            <input type='text' className='' placeholder='Message'></input>
            <textarea
              style={{ height: '100px' }}
              placeholder='Subject'
            ></textarea>
            <button className='button bg-secondary w-300 mt-10'>
              Send contact request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
