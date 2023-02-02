import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

import products from "./products.json";

import "./App.css";

function App() {
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = basket.reduce((acc, item) => {
      return (
        acc +
        item.amount * products.find((product) => product.id === item.id).price
      );
    }, 0);
    setTotal(newTotal);
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <>
      <Header 
        total={total} 
        money={money} 
      />

      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>

      <Basket
        resetBasket={resetBasket}
        products={products}
        basket={basket}
        total={total}
      />
    </>
  );
}

export default App;
