import { useEffect, useState } from "react";
import { getUserBasketItems } from "../apiCalls";

export const UseGetBasketItems = (username) => {
  const [items, setItems] = useState();

  useEffect(() => {
    getUserBasketItems(username).then((data) => {
      setItems(data);
    });
  }, []);
  return items;
};
