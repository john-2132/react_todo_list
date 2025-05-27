import { Checkbox, GridItem, Text } from "@chakra-ui/react";
import { memo } from "react";
import type { FC } from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import { DeleteConfirmModal } from "../organisms/DeleteConfirmModal";

type Props = {
  id: string;
  name: string;
  completed: boolean;
  onCheckedChange: () => void;
  onPrimaryButtonClick: () => void;
  onDeleteModalConfirm: () => void;
};

export const ViewTodoItem: FC<Props> = memo((props) => {
  const {
    id,
    name,
    completed,
    onCheckedChange,
    onPrimaryButtonClick,
    onDeleteModalConfirm,
  } = props;
  return (
    <>
      <GridItem>
        <Checkbox.Root
          variant="outline"
          colorPalette="teal"
          checked={completed}
          onCheckedChange={onCheckedChange}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </GridItem>
      <GridItem>
        <Text
          maxW="300px"
          minW="250px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          textAlign="start"
          px={3}
          py={2}
          border="1px solid transparent"
          borderRadius="md"
          textDecoration={completed ? "line-through" : ""}
        >
          {name}
        </Text>
      </GridItem>
      <GridItem>
        <PrimaryButton onClick={onPrimaryButtonClick}>編集</PrimaryButton>
      </GridItem>
      <GridItem>
        <DeleteConfirmModal
          id={id}
          name={name}
          onClick={onDeleteModalConfirm}
        />
      </GridItem>
    </>
  );
});
