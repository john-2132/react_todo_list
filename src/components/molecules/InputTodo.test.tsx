// src/components/molecules/InputTodo.test.tsx
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputTodo } from "./InputTodo";
import { TodoListProvider } from "../../providers/TodoListProvider";

test("入力後に追加ボタンをクリックするとTodoが追加される", async () => {
  const { getByPlaceholderText, getByRole, findByText } = render(
    <TodoListProvider>
      <InputTodo />
    </TodoListProvider>
  );

  const input = getByPlaceholderText("Todo入力欄");
  const button = getByRole("button", { name: "追加" });

  await userEvent.type(input, "牛乳を買う");
  await userEvent.click(button);

  // 追加されたテキストが表示されるか確認（※TodoList側のUIに依存）
  const added = await findByText("牛乳を買う");
  expect(added).toBeInTheDocument();
});
