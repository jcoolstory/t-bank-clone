import { memo, useCallback } from "react";
import { mockAction } from "../../util/mock";
import { ActionItemData, ListItemProps, ListViewProps } from "./types";

export const ListView = (props: ListViewProps) => {
  const  hanldeClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>, target:ActionItemData ): void => {
    props.onClick?.(event,target)
  }, [props.onClick])

  console.log("ListView - (length)" , props.items.length)
  return (
    <div className="tslisview-container">
      {props.items.map((item, i) => (
        <ListItem key={item.id} onClick={hanldeClick} {...item} />
      ))}
    </div>
  );
};

export const ListView2 = (props: ListViewProps) => {
  const  hanldeClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>, target:ActionItemData ): void => {
    props.onClick?.(event,target)
  }, [props])

  console.log("ListView - (length)" , props.items.length)
  return (
    <div className="tslisview-container">
      {props.items.map((item, i) => (
        <div className="tslistitem-container" onClick={(e)=>hanldeClick(e, item)}>
          <ListItemHead icon={item.icon} />
          <ListItemContent type={item.type} title={item.title} subtitle={item.subtitle} />
          <ListItemTail {...item} />
        </div>
      ))}
    </div>
  );
};


export const ListItem = memo((props: ListItemProps) => {

  function hanldeClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (props.action) {
      mockAction(props.action);
    } else {
      mockAction(props.title.toString());
    }
    props.onClick?.(event, props)
  }
  console.log("\tlistitem -(props.id) (action)" ,props.id, props.action)

  return (
    <div className="tslistitem-container" onClick={hanldeClick}>
      <ListItemHead icon={props.icon} />
      <ListItemContent type={props.type} title={props.title} subtitle={props.subtitle} />
      <ListItemTail  {...props}/>
    </div>
  );
});

const ListItemHead = ({ icon }: { icon?: string }) => {
  console.log("\t\tListItemHead - " , icon)

  return (
    <>
      {icon && (
        <div className="tslistitem-head">
          <i
            className="circle-icon"
            style={{ backgroundColor: "blue", width: "25px", height: "25px" }}
          >
            {icon}
          </i>
        </div>
      )}
    </>
  );
};

const ListItemContent = (props:  Pick<ListItemProps, "type" | "title" | "subtitle">) => {
  console.log("\t\tListItemContent - " , props.title)

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
};

export const ListItemTail =(props: ListItemProps) => {
  function hanldeClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (props.tailAction) mockAction(props.tailAction);
  }

  console.log("\t\tListItemTail - " , props.tail)

  if (props.type === "none") {
    return null;
  }

  if (props.type === "text")
    return <div className="t-s1 bold t-blues">{props.tail}</div>;

  if (props.type === "link")
    return (
      <div className="tslistitem-tail">
        <div className="tslistitem-link t-gray">
          {props.tail} {">"}
        </div>
      </div>
    );
    
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
