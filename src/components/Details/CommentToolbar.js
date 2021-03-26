import React from 'react';
import moment from 'moment';

import heart from '../../images/heart.svg';
import commentIcon from '../../images/comment.svg';
const CommentToolbar = ({ comment }) => {
  const { date } = comment;
  return (
    <div className='flex gap-5 mt-4'>
      <div className='flex justify-space-between align-items-center w-1000'>
        <div className='flex justify-center gap-2 align-items-center color-default'>
          <div className='flex align-items-center gap-05 h-20'>
            <div className='cursor'>
              <img src={heart} alt='Like button' />
            </div>
            <div className='h-20'>Likes</div>
          </div>
          <div className='flex align-items-center gap-05 '>
            <div className='cursor'>
              <img className='test' src={commentIcon} alt='Like button' />
            </div>
            <div className='h-20'>Comments</div>
          </div>
        </div>
        <div className='color-default'>
          {moment(date, 'x').format('DD MMM YYYY hh:mm a')}
        </div>
      </div>
    </div>
  );
};

export default CommentToolbar;
