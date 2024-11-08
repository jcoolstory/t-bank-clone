import { memo, useEffect, useState } from "react";
import { Box } from "../common";
import { mockAction } from "../home";
import { ListItemProps, ListViewProps } from "./slidelist-view.types";
import { ShortListView } from "./bank-home";
import { ActionItemData } from "../home/types";
import { ListView } from "../home/listview";
import { MultiPromiseExample } from "./multiPromise";

const mock2: ActionItemData[] = [
  {
    icon: "sdf",
    title: "토스뱅크통장",
    tail: "연 1.5%",
    type: "text",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
    tail: "지금받기",
    type: "text",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
    tail: "송금",
    type: "text",
  },
];

const shortmock3: ActionItemData[] = [
  {
    icon: "1위",
    title: "토스뱅크통장",
  },
  {
    icon: "2위",
    title: "토스뱅크통장",
  },
  {
    icon: "3위",
    title: "토스뱅크통장",
  },
];

export const Tab3 = () => {
  const [data, setData] = useState([]);
  const dataFetch = async () => {
    const res = await getData();
    setData(res);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="bank-home-layout-wf">
      <Box>
        <div style={{ height: 200 }}>
          <div style={{ height: 150 }}>icon</div>
          <div className="tscard-lg-button btn-primary text-center bold">
            진행중인 이벤트 이어보기
          </div>
        </div>
      </Box>
      <Box>
        <div className="bank-home-layout-wf ">
          <Box variant="thin">
            <div className="bank-home-card-title t-h1">인기상품</div>
            <SimpleListView items={shortmock3}></SimpleListView>
          </Box>
          <Box variant="thin">
            <div className="bank-home-card-title t-h1">통장</div>
            <ListView items={mock2}></ListView>
          </Box>
          <Box variant="thin">
            <div className="bank-home-card-title t-h1">입출금</div>
            <ListView items={mock2}></ListView>
          </Box>
          <Box variant="thin">
            <div className="bank-home-card-title t-h1">입출금</div>
            <ListView items={mock2}></ListView>
          </Box>
          <Box variant="thin">
            <div className="bank-home-card-title t-h1">입출금</div>
            <ListView items={mock2}></ListView>
          </Box>
        </div>
      </Box>
      <MultiPromiseExample/>
    </div>
  );
};

export const SimpleListView = (props: ListViewProps) => {
  return (
    <div className="tslisview-container">
      {props.items.map((item, i) => (
        <ShortLink key={i} {...item} />
      ))}
    </div>
  );
};

const ShortLink = memo((props: ListItemProps) => {
  return (
    <div className="tslistitem-container">
      {props.icon && (
        <div className="tssortlistitem-text-head t-t2 t-blues">
          {props.icon}
        </div>
      )}
      <div className="">
        <div className="t-s1 t-gray">{props.subtitle}</div>
        <div className="t-t2">{props.title}</div>
      </div>
      <ListItemTail {...props} />
    </div>
  );
});

const ListItemTail = (props: ListItemProps) => {
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
  if (props.type === "text") return <div className="t-blues">{props.tail}</div>;
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
