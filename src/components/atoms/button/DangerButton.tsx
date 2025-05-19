import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const DangerButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      colorPalette="red"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
