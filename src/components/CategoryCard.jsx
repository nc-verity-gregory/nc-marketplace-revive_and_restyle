import { useItems } from "../hooks/useItems";

export const CategoryCard = ({ category_name }) => {
  const items = useItems({ category_name, limit: 4, p: 1 });

  return (
    <div className="catCard">
      <h2 id="catCardTitle">{category_name}</h2>
      {!items ? (
        <p>loading...</p>
      ) : (
        items.map(({ img_url, item_id }) => {
          return <img src={img_url} className="catCardThumb" key={item_id} />;
        })
      )}
    </div>
  );
};
