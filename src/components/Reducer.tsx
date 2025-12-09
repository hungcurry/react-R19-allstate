import { useReducer } from "react";
import { cartReducer } from "@/reducers/CartReducer";
import type{ state } from "@/reducers/CartReducer";

const initialState: state[] = [];

export default function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = () => dispatch({
    type: "ADD",
    payload: { id: Date.now(), name: "Product A" },
  });
  

  return (
    <div>
      <button onClick={addItem}>加入商品</button>
      <h2>購物車內容：</h2>
      <ul>
        {
          cart.map((item) => (
            <li key={item.id}>商品 ID: {item.id}</li>
          ))
        }
      </ul>
    </div>
  );
}
