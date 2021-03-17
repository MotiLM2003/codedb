import React from 'react';
import heart from '../../images/heart.svg';
import comment from '../../images/comment.svg';
const CommentToolbar = () => {
  return (
    <div className='flex gap-5'>
      <div className='flex '>
        <div className='cursor'>
          <img src={heart} alt='Like button' />
        </div>
        <div>Likes</div>
      </div>
      <div className='flex'>
        <div className='cursor'>
          <img className='test' src={comment} alt='Like button' />
        </div>
        <div>Comments</div>
      </div>
    </div>
  );
};

export default CommentToolbar;
