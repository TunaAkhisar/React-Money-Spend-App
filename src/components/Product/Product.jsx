import React from "react";
import "./Product.css";
import { moneyFormat } from "../../MoneyFormat";

const Product = ({ total, money, product, basket, setBasket }) => {

  const currentBasket = basket.find((item) => item.id === product.id);
  
  const addBasket = () => {
 
    if (currentBasket) {
      currentBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        currentBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {

    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;

    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };




  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <div className="price">$ {moneyFormat(product.price)}</div>
      <div className="actions">
        <button
          className="sell-btn"
          disabled={!currentBasket}
          onClick={removeBasket}
        >
          Sell
        </button>
        <span className="amount">{currentBasket ? currentBasket.amount : 0}</span>
        <button
          className="buy-btn"
          disabled={total + product.price > money}
          onClick={addBasket}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
