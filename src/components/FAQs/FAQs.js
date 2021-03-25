import React, { useState } from 'react';

import PageHeader from '../PageHeader/PageHeader';
import {
  AccordionMenu,
  AccordionMenuItem,
} from '../Custom/AccordionMenu/AccordionMenu';
const FAQs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    return [false, false, false, false];
  });

  const statusChanged = (index) => {
    const temp = [false, false, false, false];
    temp[index] = !Boolean(isMenuOpen[index]);
    setIsMenuOpen([...temp]);
  };
  return (
    <div className='faqs'>
      <PageHeader text='FAQs' />
      <section className='wrapper  faqs__accordion-menu mt-14'>
        <AccordionMenu>
          <AccordionMenuItem
            header='Top most optizied websites'
            isOpen={isMenuOpen[0]}
            index={0}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem
            header='Recent tips for startups'
            isOpen={isMenuOpen[1]}
            index={1}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem
            header='Ways to transform your site'
            isOpen={isMenuOpen[2]}
            index={2}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem
            header='Keyword search'
            isOpen={isMenuOpen[3]}
            index={3}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem
            header='Flexible design standards'
            isOpen={isMenuOpen[4]}
            index={4}
            statusChanged={statusChanged}
          >
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
