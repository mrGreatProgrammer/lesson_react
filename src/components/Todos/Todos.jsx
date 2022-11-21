import React from "react";
import { ThreeCircleLoader } from "../../imgs/Loadings";
import { useGetTodosByLimitQuery } from "../../services/todos";
import CreateTodo from "./CreateTodo/CreateTodo";
import TodoItem from "./TodoItem";
import "./Todos.css";

let a = "<i>hello</i>";

// function abcFunc(c){

//   return c
// }

const Todos = () => {
  const { data, isLoading, isError, isFetching } =
    useGetTodosByLimitQuery();

  return (
    <div className="todos__container  w-[650px]">
      <CreateTodo  />
      {isFetching && <ThreeCircleLoader /> }
      {isLoading ? (
        <ThreeCircleLoader />
      ) : isError ? (
        <div className="err__msg__container">
          <p className="err__msg">ERROR</p>
        </div>
      ) : data ? (
        <div className="todos__items__container my-10 flex flex-col-reverse">
          {data.map((e) => (
            <TodoItem
              createdAt={e.createdAt}
              title={e.title}
              desc={e.desc}
              icon={e.icon}
            />
          ))}
        </div>
      ) : (
        <div>TODOS NOT FOUND</div>
      )}

        {/* {new DOMParser().parser.parseFromString(a, "application/xml")} */}
        {/* {abcFunc(a)} */}
        <div dangerouslySetInnerHTML={{__html: a}} >

        </div>
    </div>
  );
};

export default Todos;
