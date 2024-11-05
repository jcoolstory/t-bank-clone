import type { MouseEvent } from "react";
export type ListViewProps = {
  items: ListItemProps[];
};

export type ListItemProps = {
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onClickButton?: (event: MouseEvent<HTMLElement>) => void;
} & ActionItemData

export type ActionItemData = {
  icon?: string;
  title: string | number;
  subtitle?: string;
  tail?: React.ReactNode | string | undefined; 
  type?: "link" | "button";
  action?: string;
  tailAction?: string
}