import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useUser } from "../hooks/useUser";
import emptyCart from "../assets/empty_cart.svg";
import cartItems from "../assets/cart_with_items.svg";
import { Link } from "react-router-dom";

export const MobileBasket = () => {
  const { user } = useContext(UserContext);
  const userInfo = useUser(user);

  return (
    <div id="mobileBasket">
      <Link to={`/${user}/basket`}>
        <img
          src={
            userInfo && userInfo.items_in_basket !== 0 ? cartItems : emptyCart
          }
          id="basketIcon"
        />
      </Link>
    </div>
  );
};
