import { HTMLAttributes } from "react";
import "./common.css"

export const Card = (props: { children: React.ReactNode }) => {
  return <div className="tscard-container">{props.children}</div>;
};


export const Box = ({variant="cn", ...props}: { variant?: string, children: React.ReactNode }) => {
  return <div className={`tsbox-container ${variant}`}>{props.children}</div>;
};


export const SpaceRow = ({children}: HTMLAttributes<HTMLDivElement>) => {
  return (
      <div className="ts-space-row">
          {children}
      </div>
  )
}
