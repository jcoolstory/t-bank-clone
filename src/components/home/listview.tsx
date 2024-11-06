import { memo } from "react";
import { ListItemProps, ListViewProps } from "./types";
import { mockAction } from "./home";

export const ListView = (props: ListViewProps) => {
  return (
    <div className="tslisview-container">
      {props.items.map((item, i) => (
        <ListItem key={i} {...item} />
      ))}
    </div>
  );
};

export const ListItemTail = (props: ListItemProps) => {
  function hanldeClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (props.tailAction) mockAction(props.tailAction);
  }

  if (props.type === "link")
    return (
      <div className="tslistitem-tail">
        <div className="tslistitem-link t-gray">
          {props.tail} {">"}
        </div>
      </div>
    );
    if (props.type === "text") return <div className="t-s1 bold t-blues">{props.tail}</div>;
  if (props.type === "none") {
    return null;
  }
  return (
    <div className="tslistitem-tail">
      {props.tail ? (
        <button className="tslistitem-button" onClick={hanldeClick}>
          {props.tail}
        </button>
      ) : null}
    </div>
  );
};

const ListItemContent = memo((props: ListItemProps) => {
  if (props.type === "link") {
    return (
      <div className="tslistitem-content tslistitem-link">
        <div className="t-t2">{props.title}</div>
        {props.subtitle && <div className="t-s1 t-gray">{props.subtitle}</div>}
      </div>
    );
  }
  return (
    <div className="tslistitem-content">
      <div className="t-t2">{props.title}</div>
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
    <div className="tslistitem-container" onClick={hanldeClick}>
      {props.icon && (
        <div className="tslistitem-head">
          <i
            className="circle-icon"
            style={{ backgroundColor: "blue", width: "25px", height: "25px" }}
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
