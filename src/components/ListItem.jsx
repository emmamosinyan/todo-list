import React, { useState } from "react";
import { useTodos } from "../context/listContext";

const ListItem = ({ task }) => {
  const [checked, setChecked] = useState(false);
  const { toggleTodo, deleteTodo } = useTodos();

  const handleChange = () => {
    setChecked(!checked);
    toggleTodo(task.id);
  };

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  return (
    <div className="p-4 bg-gray-100 m-2 rounded-lg w-full flex justify-between">
      <div>
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={checked}
          onChange={handleChange}
          className="mr-2"
        />
        <label
          htmlFor={`task-${task.id}`}
          className={`cursor-pointer ${
            task.complete ? "line-through text-gray-500" : ""
          }`}
        >
          {task.name}
        </label>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded focus:outline-none hover:bg-blue-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
