import React from 'react';

import Avatar from '../Custom/Avatar';
import CommentToolbar from './CommentToolbar';
const Comment = ({ avatar, comment }) => {
  const { creator, title, date } = comment;
  return (
    <div>
      <div className='details-container__comment details-container__info rounded'>
        <div>
          <Avatar avatar={avatar} size='46' />
        </div>
        <div className='details-container__comment-info'>
          <div className='title-3'>{creator}</div>
          <div className='color-default'>{title}</div>
          <CommentToolbar comment={comment} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
