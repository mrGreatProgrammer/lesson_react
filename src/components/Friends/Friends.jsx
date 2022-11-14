import React from "react";
import { Link } from "react-router-dom";
import { DotsLoader } from "../../imgs/Loadings";
import { useGetUsersByLimitQuery } from "../../services/users";

const Friends = () => {
  const { isError, isFetching, isLoading, data } = useGetUsersByLimitQuery(1);

  return (
    <div>
      {isError ? (
        <div className="err__msg__container">ERROR</div>
      ) : isLoading || isFetching ? (
        <DotsLoader />
      ) : data ? (
        data.map((e) => 
        <div key={e.id} className="border ronded py-4 px-2" >

        <li className={'my-3 font-bold py-2 px-3'} >{e.name}</li>
        <Link to={`/users/${e.id}`} 
        // state={{postId}} 
        >
          show more
          </Link>
        </div>
        )
      ) : (
        <div className="err__msg__container">Users Not Found</div>
      )}
    </div>
  );
};

export default Friends;
