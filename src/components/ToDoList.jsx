import React, { useState } from "react";
import { useTodos } from "../context/listContext";
import ListItem from "./ListItem";

const ToDoList = () => {
  const { taskList, addTodo } = useTodos();
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="flex justify-center items-center pt-32">
      <div className="bg-gray-300 w-96 p-4 rounded-lg shadow-md flex items-center flex-col">
        <div className="flex items-center w-full mb-4">
          <input
            className="border border-gray-400 rounded-l p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r focus:outline-none hover:bg-blue-600"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
        {taskList.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
