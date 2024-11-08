import { forwardRef, memo, Ref, useImperativeHandle } from "react";
import { RatioItems } from "../type";
import "./bar.css";
import { BarColors, TSBarProps } from "./bar.types";

const TSBar = ({ items }: TSBarProps) => {
  return (
    <div className="tsbar-container">
      {items.map((item, i) => (
        <TSBarItem key={i} {...item} />
      ))}
    </div>
  );
};

export type RefT = {
  showStart: () => void;
};

export const TSBarRef = forwardRef<RefT, TSBarProps>(({ items }, ref) => {
  useImperativeHandle(ref, () => ({
    showStart() {
      alert("Start");
    },
  }));
  return (
    <div className="tsbar-container">
      {items.map((item, i) => (
        <TSBarItem key={i} {...item} />
      ))}
    </div>
  );
});

function TSBar1({ items }: TSBarProps) {
  return (
    <div className="tsbar-container">
      {items.map((item, i) => (
        <TSBarItem key={i} {...item} />
      ))}
    </div>
  );
}

const TSBar2 = forwardRef<HTMLDivElement, TSBarProps>(function TSBar2(
  { items },
  ref
) {
  return (
    <div ref={ref} className="tsbar-container">
      {items.map((item, i) => (
        <TSBarItem key={i} {...item} />
      ))}
    </div>
  );
});

const TSBarItem = memo(({ ratio, id }: RatioItems) => {
  return (
    <div
      className="tsbar-item"
      style={{ width: `${ratio}%`, backgroundColor: BarColors[id] }}
    ></div>
  );
});

export default TSBar;
