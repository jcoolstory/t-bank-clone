import { memo, MouseEvent, useEffect, useState } from "react";
import { currencyFormat } from "../../util/format";
import { SpaceRow } from "../common";
import "./transaction-list.css";
export type TransactionData = {
  date: string;
  icon?: string;
  title: string | number;
  subtitle?: string | number;
  balance: number;
  tractionAmount: number;
};

export type TransactionListItemProps = {
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
} & TransactionData;

type TransactionListViewProps = {
  items: TransactionListItemProps[];
};

type TransactionListGroupProps = {
  date: string;
  items: TransactionListItemProps[];
};

function dateGrouping(
  origin: TransactionListGroupProps[],
  items: TransactionData[]
) {
  const value = items.reduce((prev, cur) => {
    if (prev.length === 0) {
      prev.push({ date: cur.date, items: [cur] });
      return prev;
    }
    const lastGroup = prev[prev.length - 1];
    if (lastGroup.date !== cur.date) {
      prev.push({ date: cur.date, items: [cur] });
    } else {
      lastGroup.items.push(cur);
    }
    return prev;
  }, [...origin]);

  return value;
}

export const TransactionView = (props: { items: TransactionData[] }) => {
  const [origin, setOrigin] = useState<TransactionListGroupProps[]>([]);
  useEffect(() => {
    const newValue = dateGrouping([], props.items);
    setOrigin(newValue);
  }, [props.items]);

  return (
    <div className="tstransactionlistitem-date-group" >
      {origin.map((item, i) => (
        <TransactionGroup key={i} {...item} />
      ))}
    </div>
  );
};

export const TransactionGroup = (props: TransactionListGroupProps) => {

  return (
    <div className="tstransactionlistitem-date-group">
      <div>{props.date}</div>
      <TransactionList items={props.items} />
    </div>
  );
};

export const TransactionList = (props: TransactionListViewProps) => {
  return (
    <div className="tstransactionlist-container">
      {props.items.map((item, i) => (
        <TransactionItem key={i} {...item} />
      ))}
    </div>
  );
};

const TransactionItem = memo((props: TransactionListItemProps) => {
  return (
    <div className="tstransactionlistitem-container">
      {props.icon && (
        <div className="tstransactionlist-text-head t-t2 t-blues">
          <i
            className="circle-icon"
            style={{ backgroundColor: "blue", width: "30px", height: "30px" }}
          >
            {props.icon}
          </i>
        </div>
      )}

      <div className="flex-grow-1">
        <SpaceRow>
          <div>
            <div className="t-t1">{props.title}</div>
            <div className="t-s1 t-gray">{props.subtitle}</div>
          </div>
          <ListItemTail {...props} />
        </SpaceRow>
      </div>
    </div>
  );
});

const ListItemTail = (props: TransactionListItemProps) => {
  return (
    <div className="tstransactionlistitem-tail">
      <div className="t-t1 t-blues">
        {signString(props.tractionAmount) +
          currencyFormat(props.tractionAmount)}
      </div>
      <div className="t-s1 t-gray">{currencyFormat(props.balance)}</div>
    </div>
  );
};

function signString(value: number) {
  if (value > 0) return "+";
  else return "";
}
