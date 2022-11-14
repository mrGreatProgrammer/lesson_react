import React from "react";
import './Comment.css'
import { Link } from 'react-router-dom';

const Comment = ({ commentTitle, commentBody, email }) => {
  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__email text-xs mb-1 text-slate-300">{email}</div>
        <div className="comment__title text-lg my-2">
          <h4>{commentTitle}</h4>
        </div>
      </div>
      <div className="comment__body">
        <p className="comment__body-p">{commentBody}</p>
      </div>
      <div className="comment__btns__container">
        <Link to="/"  >
            reply
        </Link>
      </div>
    </div>
  );
};

export default Comment;
