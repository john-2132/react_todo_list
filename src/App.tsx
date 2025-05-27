import { ChakraProvider } from "@chakra-ui/react"
import { InputTodo } from "./components/molecules/InputTodo";
import { TodoList } from "./components/organisms/TodoList";
import { TodoListProvider } from "./providers/TodoListProvider";
import system from "./theme/theme";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider value={system}>
        <TodoListProvider>
          <InputTodo />
          <TodoList />
        </TodoListProvider>
      </ChakraProvider>
    </div>
  );
}
