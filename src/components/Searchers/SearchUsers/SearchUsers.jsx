import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ThreeCircleLoader } from "../../../imgs/Loadings";
import { useSearchUsersQuery } from "../../../services/users";

const SearchUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("postName") || "";
  const {data, isFetching, isLoading, isError, refetch} = useSearchUsersQuery(postQuery);
  // posts?postName=abc
  console.log("*************\n*************\n*************\n render \n*******************\n*************\n*************")

  const location = useLocation();

  console.log(data);
  console.log("postQuery", postQuery);
  console.log("location", location);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value;
    const isLatest = form.latestchecked;

    const params = {};
    if(query.length) {params.postName=query}
    if(isLatest) {params.latest=true}

    setSearchParams(params);
    // /posts?postName=abc&latest=true
    refetch();
  }

  // React.useEffect(()=>{
  //   console.log("---------\n---------\n---------\n---------\n---------")
  // }, [searchParams])

  return (
    <div>
      SearchUsers
      <form onSubmit={handleSubmit}>
        <input defaultValue={postQuery} className="border py-1 px-2 rounded" type="search" name="search" />
        <input type="checkbox" name="latest" />
        <button className="bg-slate-300 py-1 px-2 rounded" type="submit">search</button>
      </form>
      <div className="users__container">
        {isError ?
        <div className="err__msg__container">
          <h4 className="err__msg">ERROR</h4>
        </div>:
        isFetching || isLoading ?
          <ThreeCircleLoader />
          : data === null || !data.length ?
          <div className="err__msg__container">
            <h4 className="err__msg">not found</h4>
          </div>:
          data.map((e,id)=>
          <div key={e.id} className="border rounded p-3 my-6" >
            <h5 className="username">{e.username}</h5>
          </div>
          )
      }
      </div>
    </div>
  );
    };

export default SearchUsers;
