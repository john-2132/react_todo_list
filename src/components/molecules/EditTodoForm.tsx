import { GridItem, HStack, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, KeyboardEvent, memo } from "react";
import { useEnterEscape } from "../../hooks/useEnterEscape";
import PrimaryButton from "../atoms/button/PrimaryButton";

type Props = {
  text: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  onCancel: () => void;
};

export const EditTodoForm: FC<Props> = memo((props) => {
  const { text, onInputChange, onButtonClick, onCancel } = props;

  const onKeyDown = useEnterEscape({
    onEnter: onButtonClick,
    onEscape: onCancel,
  });

  return (
    <>
      <GridItem></GridItem>
      <GridItem>
        <Input
          value={text}
          px={3}
          py={2}
          border="1px solid gray"
          borderRadius="md"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          required
          autoFocus
        />
      </GridItem>
      <GridItem>
        <PrimaryButton onClick={onButtonClick}>更新</PrimaryButton>
      </GridItem>
      <GridItem></GridItem>
    </>
  );
});
