import { useEffect, useState } from "react";
import { getCategories } from "../apiCalls";

export const useCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);
  return categories;
};
