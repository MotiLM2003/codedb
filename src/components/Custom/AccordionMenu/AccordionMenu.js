import React from 'react';
// acordion menu container
export const AccordionMenu = ({ children }) => {
  return <div className='accordion-menu'>{children}</div>;
};

// Acordion menu item componenet
export const AccordionMenuItem = (props) => {
  const {
    children,
    header,
    isOpen = false,
    isWithButton = false,
    index,
    statusChanged,
  } = props;
  const className = isOpen
    ? 'accordion-menu--item-open'
    : `accordion-menu--item-close ${isWithButton ? 'h-7' : 'h-1'}`;

  const itemSymbol = isOpen ? '-' : '+';

  return (
    <div className='accordion-menu__item-container'>
      <div
        className='accordion-menu__item'
        onClick={() => {
          statusChanged(index);
        }}
      >
        <div className='accordion-menu__box'>
          <div>{header}</div>
          <div className='color-secondary font-size-20'>{itemSymbol}</div>
        </div>
      </div>
      <div className='flex'>
        <div className={`${className} accordion-menu__content grow`}>
          {children}
        </div>
        {isWithButton && (
          <div className='justify-flex-end'>
            <button className='button bg-primary'>Apply now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionMenu;
