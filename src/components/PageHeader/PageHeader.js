import React from 'react';

const PageHeader = ({ text }) => {
  return (
    <div className='page-header'>
      <section className='wrapper page-header__text'>
        <h3>{text}</h3>
      </section>
    </div>
  );
};

export default PageHeader;
