import { useSearchParams } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import { ItemCard } from "../components/ItemCard";
export const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category_name = searchParams.get("category");
  const queries = {};
  if (category_name) {
    queries.category_name = category_name;
  }
  const allItems = useItems(queries);

  return (
    <main>
      <h1 className="pageTitle">
        {category_name ? category_name : "All items"}
      </h1>
      {!allItems ? (
        <p>loading...</p>
      ) : (
        <section className="itemWrapper">
          {allItems.map((item) => {
            return <ItemCard item={item} key={item.item_id} />;
          })}
        </section>
      )}
    </main>
  );
};
