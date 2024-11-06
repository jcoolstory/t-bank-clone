import { memo } from "react";

import { mockAction } from "../home";
import { ListItemProps, ListViewProps } from "./slidelist-view.types";
import "./slidelist-view.css"
import { ListItemTail } from "../home/listview";

export const SlideListView = (props: ListViewProps) => {
  return (
    <div className="tsslideview">
        <div className="tsslideview-container">
            {props.items.map((item, i) => (
                <ListItem key={i} {...item} />
            ))}
        </div>
    </div>
  );
};


const ListItemContent = memo((props: ListItemProps) => {
  if (props.type === "link") {
    return (
      <div className="tsslideview-content tsslideview-link">
        <div className="t-t2">{props.title}</div>
        {props.subtitle && <div className="t-s1 t-gray">{props.subtitle}</div>}
      </div>
    );
  }
  return (
    <div className="tsslideview-content">
      <div className="t-s1">{props.title}</div>
      {props.subtitle && <div className="t-s1 t-gray">{props.subtitle}</div>}
    </div>
  );
});

export const ListItem = memo((props: ListItemProps) => {
  function hanldeClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (props.action) {
      mockAction(props.action);
    } else {
      mockAction(props.title.toString());
    }
  }

  return (
    <div className="tsslideview-item" onClick={hanldeClick}>
      {props.icon && (
        <div className="tsslideview-head">
          <i
            className="circle-icon"
            style={{ backgroundColor: "blue", width: "80px", height: "80px" }}
          >
            {props.icon}
          </i>
        </div>
      )}
      <ListItemContent {...props} />
      <ListItemTail {...props} />
    </div>
  );
});
