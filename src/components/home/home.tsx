import { memo, useCallback, useState } from "react";
import { mockAction } from "../../util/mock";
import { Card, Divider } from "../common";
import "./home.css";
import { ListItem, ListView, ListView2 } from "./listview";
import { mock, mock2, mock3, mock4 } from "./mock";
import { ActionItemData, ListItemProps } from "./types";

const Home = () => {
  console.log("Home")
  const [toggle, setToggle] = useState(false);
  const [mockData1, setMockData1] = useState(mock);
  const [mockData2, setMockData2] = useState(mock2);
  const [mockData3, setMockData3] = useState(mock3);
  const handleClick1 = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>, target:ActionItemData ): void => {
    console.log("hanldeClick1", target)
    setMockData1( (prev:ActionItemData[] ) => {
      return prev.map( (item) => {
        if (item.id === target.id) {
          if (item.tail !== "on") {
            item.tail = "on"
          } else {
            item.tail = "off"
          }
          return { ...item}
        } 
        return item
      })
      // return [...prev]
    })
  },[])

  const handleClick2 = (event: React.MouseEvent<HTMLElement, MouseEvent>, target:ActionItemData ): void => {
    console.log("hanldeClick1", target)
    setMockData1( (prev:ActionItemData[] ) => {
      return prev.map( (item) => {
        if (item.id === target.id) {
          if (item.tailAction !== "on") {
            item.tailAction = "on"
          } else {
            item.tailAction = "off"
          }
          return { ...item}
        } 
        return item
      })
    })
  }
  const handleToggle = () => {
    setToggle(prev=>!prev)
  }
  return (
    <div className="home-container">
      <div className="home-layout" onClick={handleToggle}>
        <Card>
          <ListItem title={"토스뱅크"} type="link" ></ListItem>
        </Card>
        <Card>
          <ListView items={mockData1} onClick={handleClick1} ></ListView>
          <Divider />
          <div className="tscard-row">내계좌 대출 증권 포인트보기</div>
        </Card>
        <Card>
          <ListView items={mockData2}></ListView> ""
        </Card>
        <Card>
          <ListView items={mockData3}></ListView>

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

            {/* <ListView items={mock4}></ListView> */}
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
        <button className="tslistitem-button btn-primary" onClick={(e)=> { props.onClick?.(e, props)}}>{props.tail}</button>
      </div>
    </div>
  );
});

export default Home;
