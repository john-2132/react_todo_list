import { Button } from "@chakra-ui/react";
import { memo, forwardRef } from "react";
import type { ReactNode} from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const PrimaryButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, onClick } = props;
  return (
    <Button
      ref={ref}
      colorPalette="teal"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

export default memo(PrimaryButton);