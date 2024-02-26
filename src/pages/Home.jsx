import { CategoryCard } from "../components/CategoryCard";
import { useCategories } from "../hooks/useCategories";
import Logo from "../assets/Logo_large.png";
import { NavigationButton } from "../components/NavigatonButton";
import { Link } from "react-router-dom";
export const Home = () => {
  const categories = useCategories();

  return (
    <main>
      <img src={Logo} className="heroLogo" />
      <h2>A place to buy and sell preloved goods</h2>
      <NavigationButton children={["items", "All Items"]} />
      {!categories ? (
        <p>loading</p>
      ) : (
        categories.map(({ category_name }) => {
          return (
            <Link to={`/items?category=${category_name}`} key={category_name}>
              <CategoryCard category_name={category_name} />
            </Link>
          );
        })
      )}
    </main>
  );
};
