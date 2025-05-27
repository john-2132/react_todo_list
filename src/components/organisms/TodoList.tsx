import { Center, Grid, Stack, Text } from "@chakra-ui/react";
import { Fragment, memo } from "react";
import { useTodoList } from "../../hooks/useTodoList";
import { TodoCounter } from "../molecules/TodoCounter";
import { TodoItem } from "../molecules/TodoItem";

export const TodoList = memo(() => {
  const { todoList } = useTodoList();

  return (
    <>
      <Center>
        {todoList.length === 0 ? (
          <Text>タスクが登録されていません。</Text>
        ) : (
          <>
            <Stack>
              <TodoCounter />
              <Grid
                templateColumns="auto 1fr auto auto"
                alignItems="center"
                gap={4}
                w="100%"
              >
                {todoList.map((todo) => (
                  <Fragment key={todo.id}>
                    <TodoItem
                      id={todo.id}
                      name={todo.name}
                      isCompleted={todo.isCompleted}
                    />
                  </Fragment>
                ))}
              </Grid>
            </Stack>
          </>
        )}
      </Center>
    </>
  );
});
