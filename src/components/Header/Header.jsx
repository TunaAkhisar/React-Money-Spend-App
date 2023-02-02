import React from "react";
import "./Header.css";
import { moneyFormat } from "../../MoneyFormat";

const Header = ({ total, money }) => {
  return (
    <div className="header">

      {total === 0 && (
        <div>
          You have <span>${moneyFormat(money)} </span> to spend
        </div>
      )}
      
      {total > 0 && (
        <div>
          You have <span> $ {moneyFormat(money - total)} </span> to spend
        </div>
      )}

      {money - total === 0 && (
        <div>
          You have $ 0 to spend
        </div>
      )}
    </div>
  );
};

export default Header;
