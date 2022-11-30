import React from "react";
import { InfoNotification } from "../../hoc/Notification/InfoNotification";
import { SuccessNotification } from "../../hoc/Notification/SuccessNotification";
import { ThreeCircleLoader } from "../../imgs/Loadings";
import { regExpLessonFive } from "../../regexps/lessonFive";
// import { regExpLessonFour } from "../../regexps/lessonFour";
// import { regExpLessonThree } from "../../regexps/lessonThree";
// import { regExpLessonTwo } from "../../regexps/lessonTwo";
// import { regExpLessonOne } from "../../regexps/lessonOne";
import { useGetTodosByLimitQuery } from "../../services/todos";
import Selector from "../forms/ui/Selector/Selector";
import CreateTodo from "./CreateTodo/CreateTodo";
import TodoItem from "./TodoItem";
import "./Todos.css";
// const TodoItem = React.lazy(import("./TodoItem"));

let a = "<i>hello</i>";

// function abcFunc(c){

//   return c
// }

const dataSelector = [
  { id: 1, name: "option 1" },
  { id: 2, name: "option 2" },
  { id: 3, name: "option 3" },
];

const Todos = () => {
  const { data, isLoading, isError } = useGetTodosByLimitQuery();

  React.useEffect(() => {
    // regExpLessonOne();
    // regExpLessonTwo();
    // regExpLessonThree();
    // regExpLessonFour();
    regExpLessonFive();
  }, []);

  return (
    <div className="todos__container  w-[650px]">

      <SuccessNotification title="hello" message="this is success notification" />
      <InfoNotification title="hi" message="this is info notification" />

      <Selector
        dataOptions={dataSelector}
        disabled={false}
        labelTxt={"selector"}
        name={"h"}
        selectorId={"h"}
        defaultValue={""}
      />
      <CreateTodo />
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
            <div key={e.id}>
              <TodoItem
                elemId={e.id}
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
      <div dangerouslySetInnerHTML={{ __html: a }}></div>
    </div>
  );
};

export default Todos;
