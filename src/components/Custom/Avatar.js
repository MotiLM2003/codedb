import React from 'react';

const Avatar = ({ avatar, size = 24 }) => {
  return (
    <img
      className={`avatar`}
      style={{ height: `${size}px`, width: `${size}px` }}
      src={avatar}
      alt='avatar'
    />
  );
};

export default Avatar;
