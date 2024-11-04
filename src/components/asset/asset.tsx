import { memo, useMemo } from "react";
import "./asset.css";
import { AssetItemTypes, RatioItems } from "../type";
import { currencyFormat } from "../../util/format";
import { BarColors } from "../bar/bar.types";

export const useItem = (items: Array<AssetItemTypes>) => {
  const values = useMemo(() => {
    const total = items.reduce((prev, cur) => {
      return prev + cur.value;
    }, 0);

    return items.map((item, i) => ({
      id: i,
      ...item,
      ratio: (item.value / total) * 100,
    }));
  }, [items]);
  return values;
};

export const Asset = memo(({ items }: TSAssetProps) => {

  return (
    <div className="tsasset-container" >
      {items.map((item, i) => (
        <AssetItem key={i} item={item} />
      ))}
    </div>
  );
});

export const AssetItem = ({ item }: { item: RatioItems }) => {
  return (
    <div className={`tsasset-item  ${item.value === 0 ? "t-disalbed": ""}`}>
      <div className="tsasset-item-ico-container">
        <i className="circle-icon" style={{backgroundColor: `${ item.value === 0 ? "#888":BarColors[item.id]} `}}>icon</i>
      </div>
      <div className="tsasset-item-title">
        <div className="t-t1">{item.title}</div>
        <div className="t-t2 t-gray">{item.ratio.toFixed()}%</div>
      </div>
      <div className="tsasset-item-extend">
        <div className="t-t1">{currencyFormat(item.value)}</div>
        {item.diff !== 0 && 
            <div className={`t-t2 ${ item.diff > 0 ? "diff-plus" :"diff-minus" }`}>지난달보다 {currencyFormat(item.diff)}</div>
        }
      </div>
    </div>
  );
};

export type TSAssetProps = {
  items: Array<RatioItems>;
};

export default {};
