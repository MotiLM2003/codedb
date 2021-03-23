import React from 'react';

import AccordionMenuItem from './AccordionMenuItem';
const AccordionMenu = () => {
  return (
    <div className='accordion-menu'>
      <AccordionMenuItem header='Top most optizied websites' isOpen={true}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
        perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
        soluta officiis!
      </AccordionMenuItem>
      <AccordionMenuItem header='Recent tips for startups'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
        perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
        soluta officiis!
      </AccordionMenuItem>
      <AccordionMenuItem header='Ways to transform your site'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
        perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
        soluta officiis!
      </AccordionMenuItem>
      <AccordionMenuItem header='Keyword search'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
        perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
        soluta officiis!
      </AccordionMenuItem>
      <AccordionMenuItem header='Flexible design standards'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
        perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
        soluta officiis!
      </AccordionMenuItem>
    </div>
  );
};

export default AccordionMenu;
