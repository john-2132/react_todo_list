import { Center, HStack, Input } from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";
import type { ChangeEvent, FC } from "react";
import { useTodoList } from "../../hooks/useTodoList";
import PrimaryButton from "../atoms/button/PrimaryButton";

import { v4 as uuidv4 } from "uuid";
import { useEnterEscape } from "../../hooks/useEnterEscape";

export const InputTodo: FC = memo(() => {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodoList();

  const onChangeTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  const onClickAddTodo = () => {
    if (todo === "") return;
    addTodo({ id: uuidv4(), name: todo, completed: false });
    setTodo("");
  };

  const onKeyDown = useEnterEscape({
    onEnter: onClickAddTodo,
    onEscape: () => setTodo(""),
  });

  return (
    <Center p={2}>
      <HStack px={6} py={2} borderRadius="lg">
        <Input
          bg="white"
          placeholder="Todo入力欄"
          value={todo}
          onChange={onChangeTodo}
          onKeyDown={onKeyDown}
          required
        />
        <PrimaryButton onClick={onClickAddTodo}>追加</PrimaryButton>
      </HStack>
    </Center>
  );
});
