import React from "react";
import { ThreeCircleLoader } from "../../imgs/Loadings";
import { regExpLessonThree } from "../../regexps/lessonThree";
// import { regExpLessonTwo } from "../../regexps/lessonTwo";
// import { regExpLessonOne } from "../../regexps/lessonOne";
import { useGetTodosByLimitQuery } from "../../services/todos";
import CreateTodo from "./CreateTodo/CreateTodo";
import TodoItem from "./TodoItem";
import "./Todos.css";
// const TodoItem = React.lazy(import("./TodoItem"));

let a = "<i>hello</i>";

// function abcFunc(c){

//   return c
// }

const Todos = () => {
  const { data, isLoading, isError } =
    useGetTodosByLimitQuery();
    
    React.useEffect(()=>{
      // regExpLessonOne();
      // regExpLessonTwo();
      regExpLessonThree();
    },[])

  return (
    <div className="todos__container  w-[650px]">
      <CreateTodo  />
      {/* {isFetching && <ThreeCircleLoader /> } */}
      {isLoading ? (
        <ThreeCircleLoader />
      ) : isError ? (
        <div className="err__msg__container">
          <p className="err__msg">ERROR</p>
        </div>
      ) : data ? (
        <div className="todos__items__container my-10 flex flex-col-reverse">
          {data.map((e) => (
            <div key={e.id} >
            <TodoItem
              createdAt={e.createdAt}
              title={e.title}
              desc={e.desc}
              icon={e.icon}
              />
              </div>
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
