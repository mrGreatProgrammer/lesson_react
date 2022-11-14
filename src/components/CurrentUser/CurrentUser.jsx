import React from "react";
import { useParams } from "react-router-dom";
import { DotsLoader } from "../../imgs/Loadings";
import { useGetUsersByIdQuery } from "../../services/users";

const CurrentUser = () => {
  const params = useParams();

  const {
    isError,
    // isFetching,
    isLoading,
    data,
  } = useGetUsersByIdQuery(params.userId);

//   console.log("params", params);
//   console.log("params.userId", params.userId);
//   console.log("data", data);

  return (
    <div>
      CurrentUser
      {isError ? (
        <div className="err__msg__container">ERROR</div>
      ) : isLoading ? (
        <DotsLoader />
      ) : data ? (
        <div className={"text-lg font-bold border p-2 rounded"}>
          {data?.find((e) => e).name}
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
};

export default CurrentUser;
