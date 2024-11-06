import type { MouseEvent } from "react";
import { ActionItemData } from "../home/types";
export type ListViewProps = {
  items: ListItemProps[];
};

export type ListItemProps = {
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onClickButton?: (event: MouseEvent<HTMLElement>) => void;
} & ActionItemData

