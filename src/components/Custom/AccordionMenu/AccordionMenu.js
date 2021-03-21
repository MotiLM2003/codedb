import React from 'react';

import AccordionMenuItem from './AccordionMenuItem';
const AccordionMenu = () => {
  return (
    <div className='accordion-menu'>
      <div className='accordion-menu__item'>
        <div>Top most optizied websites</div>
        <div className='color-secondary font-size-20'>-</div>
      </div>
      <div className='accordion-menu__item'>
        <div>Ways to transform your site</div>
        <div className='color-secondary'>+</div>
      </div>
      <div className='accordion-menu__item'>
        <div>Keyword search</div>
        <div className='color-secondary'>+</div>
      </div>
    </div>
  );
};

export default AccordionMenu;
