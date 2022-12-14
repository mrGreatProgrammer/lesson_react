import React from "react";
import { useLocation } from "react-router-dom";
import { ThreeCircleLoader } from "../../imgs/Loadings";
import { useGetCommentsByPostIdQuery, useGetPostsByLimitQuery } from "../../services/posts";
import PaginationBtns from "../ui/PaginationBtns/PaginationBtns";
import Post from "./Post/Post";

const Posts = () => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading, refetch, isFetching } =
    useGetPostsByLimitQuery(page);



  const location = useLocation();

  console.log("location", location);


  function toPrevPage() {
    setPage((page) => page - 1);
    refetch();
  }
  function toNextPage() {
    setPage((page) => page + 1);
    refetch();
  }

  return (
    <div className={"posts"}>
      <h1>Posts</h1>
      <div className="posts__container">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading || isFetching ? (
          <ThreeCircleLoader width={"75"} height={"75"} />
        ) : data === null || !data?.length ? (
            <div className="notFound__msg">not found</div>
            ) : (
            data.map((e, i) => (
              <Post
                postId={e.id}
                userId={e.userId}
                title={e.title}
                postBody={e.body}
                key={i}
              />
            ))
        )}
      </div>

      <PaginationBtns
        currentPage={page}
        toPrevPage={toPrevPage}
        toNextPage={toNextPage}
      />
    </div>
  );
};

export default Posts;
