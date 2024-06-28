import { createContext, useContext, useState } from "react";
import { DUMMY_LIST } from "../dummy-list";

const ListContext = createContext({
  taskList: DUMMY_LIST,
});

export const ListContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(DUMMY_LIST);

  const addTodo = (name) => {
    const newTodo = { id: Date.now(), name, complete: false };
    setTaskList([...taskList, newTodo]);
  };

  const toggleTodo = (id) => {
    setTaskList(
      taskList.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTaskList(taskList.filter((todo) => todo.id !== id));
  };

  return (
    <ListContext.Provider value={{ taskList, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </ListContext.Provider>
  );
};

export const useTodos = () => useContext(ListContext);
