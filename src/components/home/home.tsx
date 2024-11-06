import React, { memo } from "react";
import "./home.css";
import { ListItem, ListView } from "./listview";
import { ActionItemData, ListItemProps } from "./types";
import { Card } from "../common";
const mock : ActionItemData[]= [
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "송금",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "지금받기",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "송금",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "송금",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "송금",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
    tail: "송금",
  },
];

const mock2 : ActionItemData[] = [
  {
    icon: "sdf",
    title: 1233,
    subtitle: "11월 신용카드로 쓴돈",
    tail: "새 내역",
  },
  {
    icon: "sdf",
    title: 1233,
    subtitle: "토스뱅크통장",
  },
];

const mock3: ActionItemData[] = [
  {
    icon: "sdf",
    title: "내신용점수",
    tail: "확인하기",
    type: "link",
  },
];

const mock4: ActionItemData[] = [
  {
    icon: "1",
    title: "버튼누르고 10원 받기",
    type: "link",
  },
  {
    icon: "sdf",
    title: "내보홈료정산하기",
    type: "link",
  },
];


const Divider = () => <div className="tscard-divider" />;
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-layout">
        <Card>
        <ListItem title={"토스뱅크"} type="link" ></ListItem>
        </Card>
        <Card>
          <ListView items={mock}></ListView>
          <Divider />
          <div className="tscard-row">내계좌 대출 증권 포인트보기</div>
        </Card>
        <Card>
          <ListView items={mock2}></ListView>
        </Card>
        <Card>
          <ListView items={mock3}></ListView>

          <Divider />
          <div className="tscard-row">
            <div className="tscard-flex-column">
              <div>계좌개설</div>
              <div>카드발급</div>
              <div>대출받기</div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="tscard-content">
            <div>
              11월 5일 화요일
              <div className="t-t1">정시원님을 위해 준비했어요</div>
            </div>
            <div className="tscard-row">
              <div className="tscard-content-column">
                <div className="tscard-lg-button">
                  주택담보대출
                  <br />
                  갈아타기
                </div>
                <div className="tscard-lg-button">
                  숨은환금액
                  <br />
                  찾기
                </div>
              </div>
            </div>

            <ListView items={mock4}></ListView>
          </div>
        </Card>
        <Card>
          <ShortLink title={"매일 포인트 미션"} subtitle="3번남음" tail="10원 받기" onClick={()=> mockAction("10원 받기")}/>
        </Card>
      </div>
    </div>
  );
};

const ShortLink = memo((props: ListItemProps) => {
  return (
    <div className="tslistitem-container">
      <div className="tslistitem-content">
        <div className="t-s1 t-gray">{props.subtitle}</div>
        <div className="t-t1">{props.title}</div>
      </div>
      <div className="tslistitem-tail">
        <button className="tslistitem-button btn-primary" onClick={props.onClick}>{props.tail}</button>
      </div>
    </div>
  );
});

export const mockAction = (message: string) => {
    return alert(message);
}
export default Home;
