import React from 'react';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import bookApi from '../../../api/bookApi';
import { Book } from '../../../types';
import CommonButton from '../../components/CommonButton';
import CommentsWrapper from './Comments.styles';
import { useAppSelector } from '../../../store';

type CommentsProps = {
  book: Book,
  setBookInState: (data: Book) => void,
}

const Comments: React.FC<CommentsProps> = (props) => {
  const user = useAppSelector((state) => state.userReducer.user);
  const commentsArray = props.book.comments;
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: async (value) => {
      try {
        if (!user) { return; }
        const newComment = {
          text: value.text.trim(),
          book_id: props.book.bookId,
          user_id: user.id,
        };
        const response = await bookApi.addComment(newComment);
        value.text = '';
        props.book.comments.push(response.data.comment);
        props.setBookInState(props.book);
      } catch (error) {
        console.log('ERROR>>', error);
      }
    },
  });

  const dateToDateAgo = (date: string) => {
    dayjs.extend(relativeTime);
    const newDate = dayjs(date).fromNow();
    return `Left a comment ${newDate}`;
  };

  return (
    <CommentsWrapper>
      <h1 className="title">Comments</h1>
      {commentsArray.length > 0 && <div className="comments">
        {commentsArray.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              className="comment"
            >
              <img src={comment.user.avatar} className="avatar" />
              <div className="content_block">
                <p className="author_name">{comment.user.name}</p>
                <p className="date">{dateToDateAgo(comment.date)}</p>
              </div>
              <p className="text">{comment.text}</p>
            </div>
          );
        })}
      </div>}
      {user &&
        <form
          onSubmit={formik.handleSubmit}
          className="comment_form"
        >
          <textarea
            placeholder="Share a comment"
            className="textarea comment"
            rows={3}
            {...formik.getFieldProps('text')}
            {...formik?.touched.text ? formik?.errors.text : ''}
          />
          <CommonButton
            text="Post a comment"
          />
        </form>
      }
    </CommentsWrapper>
  );
};

export default Comments;
