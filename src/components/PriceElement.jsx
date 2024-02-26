export const PriceElement = ({ children }) => {
  const displayPrice = (price) => {
    const poundsAndPence = parseFloat(price) / 100;
    return `£${poundsAndPence.toFixed(2)}`;
  };

  return (
    <div className="priceDisplay">
      <p>{displayPrice(children)}</p>
    </div>
  );
};
