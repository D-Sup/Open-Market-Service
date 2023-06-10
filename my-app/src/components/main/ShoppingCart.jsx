import { useState, useEffect } from "react";
import { GetShoppingCart } from "../API/GetShoppingCart";
import { GetProductDetail } from "../API/GetProductDetail";

export default function ShoppingCart() {
  const [shoppingList, setShoppingList] = useState([]);

  async function getShoppingList() {
    const data = await GetShoppingCart();
    const result = await Promise.all(
      data.results.map((item) => {
        return GetProductDetail(item.product_id);
      })
    );
    setShoppingList(result);
  }
  
  useEffect(() => {
    getShoppingList();
  }, []);

  return (
    <>
      {shoppingList && shoppingList.map((item) => (
        <div>{item.product_name}</div>
      ))}
    </>
  );
}
