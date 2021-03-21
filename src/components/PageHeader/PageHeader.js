import React from 'react';

const PageHeader = ({ text }) => {
  return (
    <div className='page-header'>
      <section className='wrapper page-header__text'>
        <p>{text}</p>
      </section>
    </div>
  );
};

export default PageHeader;
