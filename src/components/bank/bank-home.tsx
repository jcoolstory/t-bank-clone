import { memo } from "react";
import { Card } from "../common";
import { ListItemTail } from "../home/listview";
import { ActionItemData, ListItemProps, ListViewProps } from "../home/types";
import "./bank-home.css";
import { SlideListView } from "./slidelist-view";
import { Tab } from "./tab";
import { Tab1 } from "./tab1";
import { Tab3 } from "./tab3";

const mock: ActionItemData[] = [
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "송금",
    type: "none",
  },
];

const mock2: ActionItemData[] = [
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "",
    type: "link",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "지금받기",
    type: "none",
  },
  {
    icon: "sdf",
    title: 1233,
    tail: "송금",
    type: "none",
  },
];


const slidemock3: ActionItemData[] = [
  {
    icon: "sdf",
    title: "토스뱅크통장",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
  },
  {
    icon: "sdf",
    title: "토스뱅크통장",
  },
];


export const BankHome = () => {
  console.log("BankHome")
  return (
    <div className="bank-home-container">
      <Tab defaultValue={1}>
        <div className="tsbank-home-tab">
          <Tab.Header>
            <Tab.HeaderItem tabIndex={0}>통장</Tab.HeaderItem>
            <Tab.HeaderItem tabIndex={1}>내 토스뱅크</Tab.HeaderItem>
            <Tab.HeaderItem tabIndex={2}>상품 찾기</Tab.HeaderItem>
          </Tab.Header>
        </div>
        <Tab.Content tabIndex={0}>
          <Tab1 />
        </Tab.Content>
        <Tab.Content tabIndex={1}>
          <Tab2 />
        </Tab.Content>
        <Tab.Content tabIndex={2}>
          <Tab3 />
        </Tab.Content>
      </Tab>
    </div>
  );
};

const Tab2 = () => {
  console.log("Tab2")
  return (
    <>
      <div style={{ height: 100 }}>
        <SlideListView items={slidemock3}/>
      </div>

      <div className="bank-home-layout">
        <Card>
          <div className="bank-home-card-title t-t1">입출금</div>
          <ShortListView items={mock}></ShortListView>
        </Card>
        <Card>
          <div className="bank-home-card-title t-t1">모으기</div>
          <ShortListView items={mock2}></ShortListView>
        </Card>
        <Card>
          <div className="bank-home-card-title t-t1">입출금</div>
          <ShortListView items={mock2}></ShortListView>
        </Card>
        <Card>
          <div className="bank-home-card-title t-t1">입출금</div>
          <ShortListView items={mock2}></ShortListView>
        </Card>
        <Card>
          <div className="bank-home-card-title t-t1">입출금</div>
          <ShortListView items={mock2}></ShortListView>
        </Card>
        <Card>
          <div className="bank-home-card-title t-t1">입출금</div>
          <ShortListView items={mock2}></ShortListView>
        </Card>
      </div>
    </>
  );
};

export const ShortListView = (props: ListViewProps) => {
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
        <div className="tssortlistitem-head">
          <i
            className="circle-icon"
            style={{ backgroundColor: "blue"}}
          >
            {props.icon}
          </i>
        </div>
      )}
      <div className="tslistitem-content">
        <div className="t-s1 t-gray">{props.subtitle}</div>
        <div className="t-t1">{props.title}</div>
      </div>
      <ListItemTail {...props} />
    </div>
  );
});


export default BankHome;
