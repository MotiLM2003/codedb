import React from 'react';

const AccordionMenuItem = (props) => {
  const { children, header, isOpen = false } = props;
  const className = isOpen
    ? 'accordion-menu--item-open'
    : 'accordion-menu--item-close';
  const itemSymbol = isOpen ? '+' : '-';

  return (
    <div className='accordion-menu__item-container'>
      <div className='accordion-menu__item'>
        <div className='accordion-menu__box'>
          <div>{header}</div>
          <div className='color-secondary font-size-20'>{itemSymbol}s</div>
        </div>
      </div>
      <div>
        <div className={`${className} accordion-menu__content`}>{children}</div>
        <div className='justify-flex-end'>
          <button className='button '>sasad</button>
        </div>
      </div>
    </div>
  );
};

export default AccordionMenuItem;
