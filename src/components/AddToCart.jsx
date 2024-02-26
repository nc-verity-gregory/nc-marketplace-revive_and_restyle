import addIcon from "../assets/add.svg";
import { addToBasket } from "../apiCalls";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const AddToCart = ({ item_id }) => {
  const { user } = useContext(UserContext);

  const handleAdd = () => {
    addToBasket(item_id, user);
  };
  return (
    <button className="addToCart" onClick={handleAdd}>
      <img src={addIcon} />
    </button>
  );
};
