import React from 'react';

const AccordionMenuItem = (props) => {
  const { children, header } = props;

  return (
    <div>
      <div className='accordion-menu__item'>
        <div className='accordion-menu__box'>
          <div>{header}</div>
          <div className='color-secondary font-size-20'>-</div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
        perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
        soluta officiis!
      </div>
    </div>
  );
};

export default AccordionMenuItem;
