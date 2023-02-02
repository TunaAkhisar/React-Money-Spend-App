import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.css";

const Basket = ({ products, basket, total, resetBasket }) => {
  return (
    <div className="basket-container container">
      <h3>Shooping Details</h3>
      <ul>
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            product={products.find((p) => p.id === item.id)}
          />
        ))}
      </ul>

      <ul>
        {total > 0 && (
          <div>
            <div className="total">Total : $ {total} </div>
            <br></br>
            <button className="reset-btn" onClick={resetBasket}>
              Reset Basket
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Basket;
