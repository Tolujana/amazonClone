import { Button } from "@mui/material";
import React from "react";
import CurrencyFormat from "react-currency-format";

const SubTotal = () => {
  return (
    <div className="h-25 w-75 flex flex-col bg-[#f3f3f3] border-[1px solid #dddddd]">
      SubTotal
      <CurrencyFormat
        decimalScale={2}
        value={32}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      ;<Button>Proceed to Checkout</Button>
    </div>
  );
};

export default SubTotal;
