import React from 'react';

import PageHeader from '../PageHeader/PageHeader';
import AccordionMenu from '../Custom/AccordionMenu/AccordionMenu';
const FAQs = () => {
  return (
    <div className='faqs'>
      <PageHeader text='FAQs' />
      <section className='wrapper  faqs__accordion-menu mt-14'>
        <AccordionMenu />
      </section>
    </div>
  );
};

export default FAQs;
