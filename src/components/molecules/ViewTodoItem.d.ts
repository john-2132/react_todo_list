import type { FC } from "react";
type Props = {
    id: string;
    name: string;
    completed: boolean;
    onCheckedChange: () => void;
    onPrimaryButtonClick: () => void;
    onDeleteModalConfirm: () => void;
};
export declare const ViewTodoItem: FC<Props>;
export {};
//# sourceMappingURL=ViewTodoItem.d.ts.map