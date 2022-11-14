import React from "react";
import { useGetAllCommentsQuery } from "../../../services/comments";
import Comment from "../../ui/Comment/Comment";

const filterBySearch = (entities, search) =>
  entities?.filter((item) => item.name?.concat(item.body)?.includes(search));

const SearchComments = () => {
  const { data, isFetching, isError } = useGetAllCommentsQuery();
  const [comments, setComments] = React.useState(data);
  const [search, setSearch] = React.useState("");
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    setComments(filterBySearch(data, search));
  }, [search]);

  function handleSearch(event) {
    startTransition(() => {
      setSearch(event.target.value);
    });
  }

  if (isError) {
    return (
      <div className="err__msg__container">
        <h5 className="err__msg">ERROR</h5>
      </div>
    );
  } else if (isFetching) {
    <div className="loader__container">
      <h5 className="loader">Loading ...</h5> 
    </div>;
  } else if (data) {
    return (
      <div>
        <input
          className="border rounded px-2 py-1"
          type="text"
          onChange={handleSearch}
        />
        {isPending && <h4>Rendering ...</h4>}
        {comments
          ? comments.map((e, id) => (
              <Comment
                commentTitle={e.name}
                commentBody={e.body}
                email={e.email}
                key={id}
              />
            ))
          : "No comments"}
      </div>
    );
  }
};

export default SearchComments;
