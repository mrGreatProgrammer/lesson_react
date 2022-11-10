import React from "react";
import { useGetCommentsByPostIdQuery } from "../../services/posts";

import {
  useLocation,
  useHref,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import Comment from "../../components/ui/Comment/Comment";
import { DotsLoader } from "../../imgs/Loadings";

const Comments = () => {
  const location = useLocation();
  const href = useHref();
  // const navigation = useNavigation();
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetCommentsByPostIdQuery(
    location.state.postId
  );

  // console.log(data);
  console.log("location", location);
  console.log("href", href);
  // console.log("navigation", navigation);
  console.log("navigat", navigate);

  return (
    <div>
      <h1>Comments</h1>

      {error ?
      <div className="err__msg">
        <h5 className="err__txt">Error</h5>
      </div>
      :
      isFetching ?
      <DotsLoader />
      :
      data.map((e, i) => (
        <Comment
          commentTitle={e.name}
          commentBody={e.body}
          email={e.email}
          key={i}
        />
      ))}
    </div>
  );
};

export default Comments;
