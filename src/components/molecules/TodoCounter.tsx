import { Badge, HStack } from "@chakra-ui/react";
import { useTodoList } from "../../hooks/useTodoList";

export const TodoCounter = () => {
  const { todoList } = useTodoList();
  return (
    <HStack justify="center" p={3}>
      <Badge px={4} borderRadius="md" size="md">
        完了: {todoList.filter((todo) => todo.completed).length}
      </Badge>
      <Badge px={4} borderRadius="md" size="md">
        未完了: {todoList.filter((todo) => !todo.completed).length}
      </Badge>
      <Badge px={4} borderRadius="md" size="md">
        合計: {todoList.length}
      </Badge>
    </HStack>
  );
};
