import React from "react";
import { PencilIcon, TrashIcon } from "../../imgs/icons";

const TodoItem = ({ icon, createdAt, title, desc }) => {
  return (
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
        <button className="todo__delete--btn my-4 mx-1">
          <TrashIcon />
        </button>
        <button className="todo__update--btn my-4 mx-1">
          <PencilIcon />
        </button>
        <div className="todo__done--btn bg-green-500 text-white py-1 px-2 rounded">
          done
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
