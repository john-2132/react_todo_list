import { memo, useState } from "react";
import type { ChangeEvent } from "react";
import { useTodoList } from "../../hooks/useTodoList";
import type { Todo } from "../../types/todo";
import { EditTodoForm } from "./EditTodoForm";
import { ViewTodoItem } from "./ViewTodoItem";

export const TodoItem = memo((props: Todo) => {
  const { id, name, isCompleted } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoText, setEditTodoText] = useState(name);
  const [isCompletedTodo, setIsCompletedTodo] = useState(isCompleted);

  const { updateTodo, deleteTodo } = useTodoList();

  const onChangeEditTodoText = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodoText(e.target.value);
  };

  const onClickUpdateTodo = () => {
    if (editTodoText === "") return;
    updateTodo({ id, name: editTodoText, isCompleted: isCompletedTodo });
    setIsEditing(false);
  };

  const onCancel = () => {
    setIsEditing(false);
    setEditTodoText(name);
  };

  const onClickIsEditTodo = () => setIsEditing(!isEditing);

  const onClickIsCompletedTodo = () => {
    setIsCompletedTodo(!isCompletedTodo);
    updateTodo({ id, name, isCompleted: !isCompletedTodo });
  };

  const onClickDeleteTodo = () => {
    deleteTodo(props);
  };

  return (
    <>
      {isEditing ? (
        <>
          <EditTodoForm
            text={editTodoText}
            onInputChange={onChangeEditTodoText}
            onButtonClick={onClickUpdateTodo}
            onCancel={onCancel}
          />
        </>
      ) : (
        <>
          <ViewTodoItem
            id={id}
            name={name}
            completed={isCompletedTodo}
            onCheckedChange={onClickIsCompletedTodo}
            onPrimaryButtonClick={onClickIsEditTodo}
            onDeleteModalConfirm={onClickDeleteTodo}
          />
        </>
      )}
    </>
  );
});
