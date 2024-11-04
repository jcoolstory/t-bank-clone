export const currencyFormat = (value: number, unitString: string = "원") => {
    if (isNaN(value) || value === undefined || value === null) return "";
  
    return `${value.toLocaleString()}${unitString}`;
  };
  