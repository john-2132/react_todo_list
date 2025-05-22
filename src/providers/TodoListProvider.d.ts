import type { ReactNode } from "react";
import type { Todo } from "../types/todo";
export type TodoListContextType = {
    todoList: Array<Todo>;
    addTodo: (task: Todo) => void;
    updateTodo: (task: Todo) => void;
    deleteTodo: (task: Todo) => void;
};
export declare const TodoListContext: import("react").Context<TodoListContextType>;
export declare const TodoListProvider: (props: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TodoListProvider.d.ts.map