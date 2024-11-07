import { useMemo } from "react";
import { Box, SpaceRow } from "../common";
import { ActionItemData } from "../home/types";
import { ShortListView } from "./bank-home";
import { TransactionView } from "./transaction-list";

const transactionMock = [
  {
    date: "2024.01.02",
    icon: "sdf",
    title: "통장이자",
    subtitle: "13:03",
    balance: 12312,
    tractionAmount: 1,
  },
  {
    date: "2024.01.01",
    icon: "sdf",
    title: "통장이자",
    subtitle: "13:03",
    balance: 12312,
    tractionAmount: -123,
  },
  {
    date: "2024.01.01",
    icon: "sdf",
    title: "통장이자",
    subtitle: "13:03",
    balance: 12312,
    tractionAmount: 11,
  },
  {
    date: "2024.01.01",
    icon: "sdf",
    title: "통장이자",
    subtitle: "13:03",
    balance: 12312,
    tractionAmount: -12,
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
];

const AccountSummary = () => {
  return (
    <Box>
      <div className="tsaccount-summary">
        <div>
          <div className="t-s1 t-gray t-under ts-account-sm">
            토스뱅크 123123
          </div>
          <SpaceRow>
            <div className="t-h1">632344원</div>
            <div className="tscard-sm-button t-s1">카드</div>
          </SpaceRow>
        </div>
        <div className="ts-buttons">
          <div className="tscard-md-button btn-secondary ts-grow">632344원</div>
          <div className="tscard-md-button btn-primary ts-grow">보내기</div>
        </div>
        <ShortListView items={mock2}></ShortListView>
      </div>
    </Box>
  );
};

export function Tab1() {
  const dummy = useMemo(() => {
    const dummy = Array.from({ length: 10 })
      .map((_) => transactionMock)
      .flat();
    return dummy;
  }, []);

  return (
    <div className="bank-home-layout-wf">
      <AccountSummary />
      <Box>
        <div className="bank-home-card-title">
          <SpaceRow>
            <span>전체</span>
            <span>검색</span>
          </SpaceRow>
        </div>
        <TransactionView items={dummy}></TransactionView>
      </Box>
    </div>
  );
}
