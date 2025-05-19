import { useContext } from "react";
import {
  TodoListContext,
  TodoListContextType,
} from "../providers/TodoListProvider";

export const useTodoList = (): TodoListContextType =>
  useContext(TodoListContext);
