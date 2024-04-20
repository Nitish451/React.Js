import Product from "./product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logictech Mx master" idx={0} />
      <Product title="Apple pencil (2nd zen ) " idx={1} />
      <Product title="petronic Tod 23" idx={2} />
      <Product title="Zebronic" idx={3} />
    </div>
  );
}

export default ProductTab;
