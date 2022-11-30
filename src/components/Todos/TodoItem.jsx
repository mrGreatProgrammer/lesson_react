import React from "react";
import { PencilIcon, TrashIcon } from "../../imgs/icons";
import { LoadingSpinner } from "../../imgs/Loadings";
import { useDeleteTodoMutation } from "../../services/todos";
import ConfirmModal from "../ui/Modals/ConfirmModal/ConfirmModal";

const TodoItem = ({ elemId, icon, createdAt, title, desc }) => {
  const [deleteTodo, { isLoading, isError, isSuccess }] =
    useDeleteTodoMutation();
  const [visibleDeleteModal, setVisibleDeleteModal] = React.useState(false);

  function handleDeleteTodo(todoId) {
    deleteTodo({ todoId });
    if (isSuccess) {
      setVisibleDeleteModal(false);
    }
  }

  return (
    <>
    
      <li className="pt-4 pb-4 px-4 my-4 flex justify-between rounded">
        <div>
          <div className="todo__date_container mb-4">
            created at: <time>{createdAt}</time>
          </div>
          {/* <div className="todo__icon__container flex">
          <img src={icon} alt="" className="todo__icon rounded" />
        </div> */}
          <div className="todo__txt__container">
            <p className="todo__title text-lg my-1">{title}</p>
            <p className="todo__desc text-base my-1">{desc}</p>
          </div>
        </div>
        <div className="todo__btn__container flex flex-col">
          {isLoading ? (
            <button
              className="todo__delete--btn my-4 mx-1 disabled:bg-slate-100"
              disabled={true}
            >
              <LoadingSpinner />
            </button>
          ) : (
            <button
              className="todo__delete--btn my-4 mx-1"
              onClick={() => {
                console.log("hhhhhhhhherrrrgrsag");
                setVisibleDeleteModal(true);
              }}
            >
              <TrashIcon />
            </button>
          )}
          <button className="todo__update--btn my-4 mx-1">
            <PencilIcon />
          </button>
          <div className="todo__done--btn bg-green-500 text-white py-1 px-2 rounded">
            done
          </div>
        </div>
      </li>
      {/* {visibleDeleteModal && ( */}
        <ConfirmModal
        visibleModal={visibleDeleteModal}
          txt={"Are you sure to delete ?"}
          confirmFunc={() => handleDeleteTodo(elemId)}
          exitFunc={() => setVisibleDeleteModal(false)}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        />
      {/* )} */}
    </>
  );
};

export default TodoItem;
