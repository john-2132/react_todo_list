import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Todo } from "../types/todo";

export type TodoListContextType = {
  todoList: Array<Todo>;
  addTodo: (task: Todo) => void;
  updateTodo: (task: Todo) => void;
  deleteTodo: (task: Todo) => void;
};

export const TodoListContext = createContext<TodoListContextType>(
  {} as TodoListContextType
);

export const TodoListProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [todoList, setTodoList] = useState<Array<Todo>>(() => {
    const saved = localStorage.getItem("todoList");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo: Todo) => {
    setTodoList((prev) => [...prev, todo]);
  };
  const updateTodo = (update_todo: Todo) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === update_todo.id ? update_todo : todo))
    );
  };
  const deleteTodo = (delete_todo: Todo) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== delete_todo.id));
  };

  return (
    <TodoListContext.Provider
      value={{ todoList, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
