
import './CommentsContainer.css';
import CommentInput from './CommentInput';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';

const CommentContainer = ({ pin, user }) => {
  const [comments, setComments] = useState([]);
  const commentsContainerRef = useRef(null);
  const pin2 = useSelector(state => state.pins.pin);
  const commentsObj = pin2?.comments;

  useEffect(() => {
    if (commentsObj) {
      const commentsArr = Object.values(commentsObj);
      const processedComments = commentsArr?.map(comment => ({
        id: comment.id,
        description: comment.description,
        commenterId: comment.commentorId,
        createdAt: comment.createdAt
      }));
      setComments(processedComments);
    } else if (commentsObj === undefined) {
      setComments([]);
    }
  }, [commentsObj, pin2]);

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  const scrollToBottom = () => {
    commentsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <>
      <div className='comment-component-container'>
        <h1 className='num-comments'>
          {comments.length === 1 ? `${comments.length} Comment` : `${comments.length} Comments`}
        </h1>

        <div className='comment-list'>
          {comments.map((comment, i) => (
            <SingleComment key={i} pin={pin} comment={comment} user={user} />
          ))}
          <div ref={commentsContainerRef} />
        </div>

       <div className='comment-input-container'>
        <CommentInput pin={pin} user={user} />
      </div>
      </div>
    </>
  );
};

export default CommentContainer;
