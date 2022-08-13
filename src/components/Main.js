import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, toevoegen } = props;
  return (
    <main>
      <h2>Producten</h2>
      <div className="row block col-2">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            toevoegen={toevoegen}
          ></Product>
        ))}
      </div>
    </main>
  );
}
