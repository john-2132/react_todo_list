import { Badge, HStack } from "@chakra-ui/react";
import { useTodoList } from "../../hooks/useTodoList";

export const TodoCounter = () => {
  const { todoList } = useTodoList();
  const completedTodoCount = todoList.filter((todo) => todo.completed).length;
  const uncompletedTodoCount = todoList.filter((todo) => !todo.completed).length;
  
  return (
    <HStack justify="center" p={3}>
      <Badge px={4} borderRadius="md" size="md">
        完了: {completedTodoCount}
      </Badge>
      <Badge px={4} borderRadius="md" size="md">
        未完了: {uncompletedTodoCount}
      </Badge>
      <Badge px={4} borderRadius="md" size="md">
        合計: {todoList.length}
      </Badge>
    </HStack>
  );
};
