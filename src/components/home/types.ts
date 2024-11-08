import type { MouseEvent } from "react";
export type ListViewProps = {
  items: ListItemProps[];
  onClick?: (event: MouseEvent<HTMLElement>, target: ActionItemData) => void;
  
};

export type ListItemProps = {
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>, target: ActionItemData) => void;
  onClickButton?: (event: MouseEvent<HTMLElement>) => void;
} & ActionItemData

export type ActionItemData = {
  id?: number,
  icon?: string;
  title: string | number;
  subtitle?: string;
  tail?: React.ReactNode | string | undefined; 
  type?: "text" | "link" | "button" | "none";
  action?: string;
  tailAction?: string
}