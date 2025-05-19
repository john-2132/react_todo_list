import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { FC, memo } from "react";
import { DangerButton } from "../atoms/button/DangerButton";
import PrimaryButton from "../atoms/button/PrimaryButton";

type Props = {
  id: string;
  name: string;
  onClick: () => void;
};

export const DeleteConfirmModal: FC<Props> = memo((props) => {
  const { id, name, onClick } = props;
  return (
    <Dialog.Root key={id} size="xs">
      <Dialog.Trigger asChild>
        <DangerButton>削除</DangerButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>削除確認</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>タスク名: {name}</p>
              <p>を削除します。</p>
              <p>本当によろしいでしょうか？</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <PrimaryButton>キャンセル</PrimaryButton>
              </Dialog.ActionTrigger>
              <DangerButton onClick={onClick}>確認</DangerButton>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
});
