import { useState, useEffect } from "react";
import { getItems } from "../apiCalls";

export const useItems = (queries) => {
  const [items, setItems] = useState();

  useEffect(() => {
    getItems(queries).then((itemData) => {
      setItems(itemData);
    });
  }, []);

  return items;
};
