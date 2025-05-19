import { KeyboardEvent } from "react";

type Options = {
  onEnter: () => void;
  onEscape: () => void;
};

export const useEnterEscape = ({ onEnter, onEscape }: Options) => {
  return (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Escape") {
      onEscape();
    }
  };
};
