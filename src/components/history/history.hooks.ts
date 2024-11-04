import { useMemo } from "react";
import { MonthValueType } from "../type";
import { RatioItemType } from "./history.types";

export const useItem = (items: Array<MonthValueType>) => {
  const values = useMemo(() => {
    const maxValue = Math.max(...items.map((v) => v.value));
    let lastValue = 0;
    return items.reduce((prev: Array<RatioItemType>, cur, i) => {
      const item = {
        id: i,
        title: cur.month,
        value: cur.value,
        diff: cur.value - lastValue,
        ratio: (cur.value / maxValue) * 100,
      };

      prev.push(item);
      lastValue = cur.value;
      return prev;
    }, []);
  }, [items]);
  return values;
};
