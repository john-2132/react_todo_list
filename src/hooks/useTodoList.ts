import { useContext } from "react";
import { TodoListContext } from "../providers/TodoListProvider";
import type { TodoListContextType } from "../providers/TodoListProvider";

export const useTodoList = (): TodoListContextType =>
  useContext(TodoListContext);
