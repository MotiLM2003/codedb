export const moveUpDown = (y) => {
  return {
    hidden: {
      y: y,
    },
    visible: {
      y: 0,
      transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
    },
  };
};

export const moveLeftRight = (x) => {
  return {
    hidden: {
      x,
    },
    visible: {
      x: 0,
      transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
    },
  };
};
