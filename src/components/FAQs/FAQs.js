import React from 'react';

import PageHeader from '../PageHeader/PageHeader';
import {
  AccordionMenu,
  AccordionMenuItem,
} from '../Custom/AccordionMenu/AccordionMenu';
const FAQs = () => {
  return (
    <div className='faqs'>
      <PageHeader text='FAQs' />
      <section className='wrapper  faqs__accordion-menu mt-14'>
        <AccordionMenu>
          <AccordionMenuItem
            header='Top most optizied websites'
            isOpen={true}
            isWithButton={true}
          >
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
        </AccordionMenu>
      </section>
    </div>
  );
};

export default FAQs;
