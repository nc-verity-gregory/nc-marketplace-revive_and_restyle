import { Link } from "react-router-dom";
import { AddToCart } from "./AddToCart";
import { useWindowWidth } from "../hooks/useWindowWitdh";
import { PriceElement } from "./PriceElement";

export const ItemCard = ({ item }) => {
  const windowWidth = useWindowWidth();
  const { item_name, img_url, item_id, price } = item;

  return (
    <div className="itemCard">
      <Link to={`/items/${item_id}`}>
        <p>
          {windowWidth < 450 && item_name.length > 17
            ? item_name.slice(0, 17) + "..."
            : item_name}
        </p>
      </Link>
      <AddToCart item_id={item_id} />
      <PriceElement>{price}</PriceElement>
      <Link to={`/items/${item_id}`}>
        <img
          src={img_url}
          alt={`An image of ${item_name}`}
          className="itemCardThumb"
        />
      </Link>
    </div>
  );
};
