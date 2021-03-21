import React from 'react';

import AccordionMenuItem from './AccordionMenuItem';
const AccordionMenu = () => {
  return (
    <div className='accordion-menu'>
      <AccordionMenuItem header='Top most optizied websites'></AccordionMenuItem>
      <AccordionMenuItem header='Ways to transform your site'></AccordionMenuItem>
      <AccordionMenuItem header='Keyword search'></AccordionMenuItem>
    </div>
  );
};

export default AccordionMenu;
