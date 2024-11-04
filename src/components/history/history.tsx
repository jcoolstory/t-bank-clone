import { memo, useId, useMemo } from "react";
import "./history.css";
import { BarColors, RatioItemType, TSHistoryProps } from "./history.types";
import { useItem } from "./history.hooks";
import { currencyFormat } from "../../util/format";

const TSHistory = memo(({ items }: TSHistoryProps) => {
  const values = useItem(items);

  return (
    <div className="tshistory-header">
    <Summary asset={values[values.length-1]}/>
      <div className="tshistory-container" >
        {values.map((item, i) => (
          <TSHistoryBarItem key={i} {...item} isLast={i === values.length - 1} />
        ))}
      </div>
      <div className="tshistory-axis-container t-s1">
        {values.map((item, i) => (
          <TSHistoryAxisItem key={i} {...item} isLast={i === values.length - 1} />
        ))}
      </div>
      <div className="t-s1">만원 단위</div>
    </div>
  );
});

const TSHistoryBarItem = memo(
  ({
    ratio,
    title,
    id,
    value,
    isLast,
  }: { isLast: boolean } & RatioItemType) => {
    return (
      <div className="tshistory-yaxis-container">
        <div
          className="tshistory-item"
          style={{
            height: `${ratio}%`,
            width: "100%",
            backgroundColor: isLast ? BarColors[1] : BarColors[0],
          }}
        ></div>
        <div
          className="tshistory-item-title t-s1"
          style={{
            color: isLast ? BarColors[1] : BarColors[2],
          }}
        >
          {currencyFormat(value, "")}
        </div>
      </div>
    );
  }
);

const TSHistoryAxisItem = memo(
  ({ ratio, title, id, isLast }: { isLast: boolean } & RatioItemType) => {
    return (
      <div
        className="tshistory-item"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {isLast ? "오늘" : title}
      </div>
    );
  }
);

export default TSHistory;

export const Summary = ({ asset }: { asset: RatioItemType }) => {
  return (
    <div className="summary-container">
      <div className="t-h1 bold" style={{ marginBottom: "5px" }}>
        총자산이 지난달보다 <br />
        { currencyFormat(Math.abs(asset.diff))}
        {asset.diff < 0 ? "만원 줄었어요" : "만원 늘었어요"}
      </div>
      <div className="t-gray bold">그래프가 안맞다면</div>
    </div>
  );
};
