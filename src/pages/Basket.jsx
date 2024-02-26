import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

import { UseGetBasketItems } from "../hooks/useGetBasketItems";
import { Link } from "react-router-dom";

export const Basket = () => {
  const { user } = useContext(UserContext);
  const userBasket = UseGetBasketItems(user);
  console.log(userBasket);
  return (
    <main>
      <h1>Basket for {user}</h1>
    </main>
  );
};
