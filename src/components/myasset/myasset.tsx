import { memo, useMemo } from "react";
import "./myasset.css";
import { AssetItemTypes, MyAssetType } from "../type";
import { currencyFormat } from "../../util/format";

import { Asset } from "../asset";
import Bar from "../bar/bar";
import TSHistory from "../history/history";

const mock = [
  {
    title: "입출금",
    value: 12120,
    diff: 10,
  },
  {
    title: "저축",
    value: 312330,
    diff: -20,
  },
  {
    title: "투자",
    value: 31230,
    diff: 0,
  },
  {
    title: "연금",
    value: 32340,
    diff: 0,
  },
  {
    title: "대출",
    value: 0,
    diff: 0,
  },
];

const historyMock = [
  {
    month: "6월",
    value: 15230,
  },
  {
    month: "7월",
    value: 11230,
  },
  {
    month: "8월",
    value: 23150,
  },
  {
    month: "9월",
    value: 12323,
  },
  
  {
    month: "10월",
    value: 12323,
  },
  
  {
    month: "11월",
    value: 23401,
  },
  
]

export const useItem = (items: Array<AssetItemTypes>) => {
  const values = useMemo(() => {
    const total = items.reduce((prev, cur) => {
      return prev + cur.value;
    }, 0);

    const assets = items.map((item, i) => ({
      id: i,
      ...item,
      ratio: (item.value / total) * 100,
    }));
    return { total, assets };
  }, [items]);
  return values;
};

export const Summary = ({ asset }: { asset: MyAssetType }) => {
  return (
    <div className="summary-container">
      <div className="t-gray bold" style={{marginBottom: "5px"}}>총자산</div>
      <div className="t-h1" style={{marginBottom: "5px"}}>{ currencyFormat( asset.total)}</div>
      <div className="t-gray bold">대출제외됨</div>
    </div>
  );
};

export const MyAsset = memo(() => {
  const asset = useItem(mock);
  return (
    <>
      <div>
        <Summary asset={asset}/>
        <Bar items={asset.assets} />
        <Asset items={asset.assets} />
        <div className="divider"  />
        <TSHistory items={historyMock} />
      </div>
    </>
  );
});

export default MyAsset;
