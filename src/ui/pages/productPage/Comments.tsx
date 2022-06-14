import React from 'react';
import { useAppSelector } from '../../../store';
import CommonButton from '../../components/CommonButton';
import CommentsWrapper from './Comments.styles';

type Comment = {
  id: number,
  avatar?: string,
  name?: string,
  date: string,
  text: string,
}

const Comments = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const arr: Comment[] = [{
    id: 1,
    avatar: user?.avatar,
    name: user?.name,
    date: 'Left a comment two days ago',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }];
  return (
    <CommentsWrapper>
      <h1 className="title">Comments</h1>
      {arr && <div className="comments">
        {arr.map((comment) => {
          return (
            <div
              key={comment.id}
              className="comment"
            >
              <img src={comment.avatar} className="avatar" />
              <div className="content_block">
                <p className="author_name">{comment.name}</p>
                <p className="date">{comment.date}</p>
                <p className="text">{comment.text}</p>
              </div>
            </div>
          );
        })}
      </div>}
      <div>
        <textarea
          name=""
          id=""
          placeholder="Share a comment"
          className="textarea comment"
          // cols={30}
          rows={3}
        >
        </textarea>
        <CommonButton
          text="Post a comment" />
      </div>
    </CommentsWrapper>
  );
};

export default Comments;
