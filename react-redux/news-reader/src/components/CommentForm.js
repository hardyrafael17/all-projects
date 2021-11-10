import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCommentIsPending,
  postCommentForArticleId
} from '../features/comments/commentsSlice';

export default function CommentForm({ articleId }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postCommentForArticleId({comment: comment, articleId}))
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='comment' className='label'>
        Add Comment:
      </label>
      <div id='input-container'>
        <input
          id='comment'
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
          type='text'
        />
        <button
          disabled={useSelector(createCommentIsPending) || comment.length > 5 ? false : true}
          title={comment.length < 5 ? "Comment should be longer": "submmit"}
          className='comment-button'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
