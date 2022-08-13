import React from "react";

export default function Product(props) {
  const { product, toevoegen } = props;
  return (
    <div className="row2">
      <img className="foto" src={product.img} alt={product.title}></img>
      <h3>{product.title}</h3>
      <div> leeftijd: {product.age}</div>
      <div> Schrijver: {product.author}</div>
      <div> Prijs: ${product.price}</div>
      <div>
        <button onClick={() => toevoegen(product)}>
          toevoegen aan Winkelwagen
        </button>
      </div>
    </div>
  );
}
