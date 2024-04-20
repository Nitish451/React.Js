import "./product.css";
import Price from "./price.jsx";

function Production({ title, idx }) {
  let oldPrices = ["234,34", "56,654", "57,454", "64,34"];
  let newPrices = ["974,34", "535,654", "546,454", "698,34"];
  let description = [
    ["5,000DPI", "5 programmable buttons"],
    ["initituative surfaces", "designed for iphone"],
    ["designed for iphone", "initituative surfaces"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Production;
