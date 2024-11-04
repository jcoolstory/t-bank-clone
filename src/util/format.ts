export const currencyFormat = (value: number, unitString: string = "원") => {
    if (value === undefined || value === null) return "";
  
    return `${value.toLocaleString()}${unitString}`;
  };
  