import React from "react";
import { useDispatch } from "react-redux";
import {
  useAddTodoMutation,
//   useGetTodosByLimitQuery,
} from "../../../services/todos";

const CreateTodo = ({refetchTodos}) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoDesc, setTodoDesc] = React.useState("");
  // const dispatch = useDispatch();
  const [addTodo, { isLoading }] = useAddTodoMutation();
//   const { data, isFetching, isError } = useGetTodosByLimitQuery(1);

  function addTodoSubmit(event) {
    event.preventDefault();
    // dispatch(useAddTodoMutation(todoTitle, todoDesc))
    addTodo(todoTitle, todoDesc);
    refetchTodos();
  }

  return (
    <div className="createtodo__container">
      <form onSubmit={addTodoSubmit}>
        <input
          type="text"
          name="todoTitle"
          className="todo__inp border py-2"
          onChange={(event) => setTodoTitle(event.target.value)}
          value={todoTitle}
        />
        <input
          type="text"
          name="todoDesc"
          className="todo__inp border py-2"
          onChange={(event) => setTodoDesc(event.target.value)}
          value={todoDesc}
        />
        <button className="bg-green-400 py-2 px-3 text-white rounded" >ADD</button>
      </form>
    </div>
  );
};

export default CreateTodo;
