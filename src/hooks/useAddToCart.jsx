import { useEffect, useState } from "react";
import { addToBasket } from "../apiCalls";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const useAddToCart = (item_id) => {
  const [item, setItem] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    addToBasket(item_id, user).then((data) => {
      console.log(data);
      setItem(data);
    });
  }, []);
  return item;
};
