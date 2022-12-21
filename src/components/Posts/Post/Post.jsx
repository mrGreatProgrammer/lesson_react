import React from "react";
import { CommentIcon } from "../../../imgs/icons";
import "./Post.css";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const Post = ({ postId, userId, title, postBody }) => {
const [pi, setPi] = React.useState(postId);
const { ref, inView, entry } = useInView({
  /* Optional options */
  threshold: .7,
});

  return (
    <div ref={ref} className="post">

      {inView ? <div>

      <div className="post__header">
        <div className="post__user">{userId}</div>
        <div className="post__title__container">
          <h4 className="post__title">{title}</h4>
        </div>
      </div>
      <div className="post__body">
        <p className="post__body-p">{postBody}</p>
      </div>
      <div className="post__btns__container">
        <button className="post__btn post__btn-like">like</button>
        <button className="post__btn post__btn-comment">
          <CommentIcon /> 
        </button>
          <Link to={`/posts:${postId}/comments`} state={{postId}} >
          comments
          </Link>
      </div>
      </div>: <div className="sceleton animate-pulse">

      </div> }
    </div>
  );
};

export default Post;
