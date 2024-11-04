export type AssetItemTypes = {
  title: string;
  value: number;
  diff: number;
};

export type RatioItems = {
  id: number;
  title: string;
  ratio: number;
} & AssetItemTypes;

export type MyAssetType = {
  total: number;
  assets: RatioItems[];
};


export type MonthValueType = {
    month: string,
    value: number
}
