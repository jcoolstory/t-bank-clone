import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import "./tab.css";
type TabContextType = {
  selectIndex: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

const initalValue = {
  selectIndex: 0,
  setTab: () => {},
};

const TabContext = createContext<TabContextType>(initalValue);

export function Tab({
  defaultValue = 0,
  ...props
}: {
  defaultValue?: number;
  children: ReactNode;
}) {
  const [selectIndex, setTab] = useState(defaultValue);
  const providerValue = { selectIndex, setTab };
  return (
    <TabContext.Provider value={providerValue}>
      {props.children}
    </TabContext.Provider>
  );
}
type TabHeaderProps = {
  tabIndex: number;
  children: React.ReactNode;
};

export function TabHeaderItem(props: TabHeaderProps) {
  const { selectIndex, setTab } = useContext(TabContext);

  const handleClick = useCallback(() => {
    setTab(props.tabIndex);
  }, [props.tabIndex, setTab]);

  const className = `tstab-head-item ${
    selectIndex === props.tabIndex ? "active" : "deactive"
  }`;

  return (
    <div className={className} onClick={handleClick}>
      <div>{props.children}</div>
    </div>
  );
}

type TabContentProps = {
  tabIndex: number;
  children: React.ReactNode;
};

export function TabHeader(props: { children: React.ReactNode }) {
  return <div className="tstab-head-container">{props.children}</div>;
}

export function TabContent(props: TabContentProps) {
  const ref = useRef<Boolean>(false);
  const { selectIndex } = useContext(TabContext);
  if (selectIndex !== props.tabIndex) {
    if (ref.current)
      return (
        <div className="tstab-content" style={{ display: "none" }}>
          {props.children}
        </div>
      );
    else return null;
  }

  ref.current = true;
  return <div className="tstab-content">{props.children}</div>;
}

Tab.Header = TabHeader;
Tab.HeaderItem = TabHeaderItem;
Tab.Content = TabContent;
