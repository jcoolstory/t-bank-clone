import { MonthValueType } from "../type";

export type RatioItemType = {
    id: number
    title: string,
    ratio: number,
    value: number
    diff: number
}


export type TSHistoryProps = {
    items: Array<MonthValueType>;
}

export const BarColors = [
    "#eee",
    "#88f",
    "#888"
]
