import React from "react";
import { createContext, useContext, useState } from "react";

type ContextType = { open: boolean;
   toggle: React.Dispatch<React.SetStateAction<boolean >> };
export const FlyOutContext = createContext<ContextType>({ open: false, toggle: ()=> {} });

export const FlyOut = (props: { children: React.ReactNode }) => {
  const [open, toggle] = useState(false);
  const providerValue = { open, toggle };

  return (
    <FlyOutContext.Provider value={providerValue}>
      {props.children}
    </FlyOutContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = useContext<ContextType>(FlyOutContext);

  return (
    <div onClick={() => toggle(!open)}>
      <div> {open ? "on" : "off"} </div>
    </div>
  );
};

function List({ children }: { children: React.ReactNode }) {
  const { open } = React.useContext(FlyOutContext);
  return <div>{
    open ? <ul>{children}</ul> : null
  }</div>;
}

function Item({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
