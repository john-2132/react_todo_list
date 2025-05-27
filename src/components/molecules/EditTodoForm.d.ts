import type { ChangeEvent, FC } from "react";
type Props = {
    text: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onButtonClick: () => void;
    onCancel: () => void;
};
export declare const EditTodoForm: FC<Props>;
export {};
//# sourceMappingURL=EditTodoForm.d.ts.map