import CurrencyInstance from "./CurrencyInstance";
/**
 * Список котировок
 */

function CurrencyList(props) {
  const currency = [{}, {}, {}];

  return (
    <div className="block1-style" style={{ display: "flex" }}>
      {currency.map((o, index) => (
        <CurrencyInstance key={index} currency={o} />
      ))}
    </div>
  );
}

export default CurrencyList;
