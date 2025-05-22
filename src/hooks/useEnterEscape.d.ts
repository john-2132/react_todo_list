import type { KeyboardEvent } from "react";
type Options = {
    onEnter: () => void;
    onEscape: () => void;
};
export declare const useEnterEscape: ({ onEnter, onEscape }: Options) => (e: KeyboardEvent<HTMLInputElement>) => void;
export {};
//# sourceMappingURL=useEnterEscape.d.ts.map