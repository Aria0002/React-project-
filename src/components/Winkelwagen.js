import React from "react";

export default function Winkelwagen(props) {
  const { winkelProduct, toevoegen, verwijder } = props;
  const productPrijs = winkelProduct.reduce((a, c) => a + c.price * c.qty, 0);
  const belasting = productPrijs * 0.21;
  const verzendKosten = productPrijs > 2000 ? 0 : 50;
  const totaalPrijs = productPrijs + belasting + verzendKosten;

  return (
    <aside className="block col-1">
      <h2>Winkelwagen</h2>
      <div>{winkelProduct.length === 0 && <div>Winkelwagen is leeg</div>}</div>
      {winkelProduct.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => toevoegen(item)} className="toevoegen">
              <b>+</b>
            </button>
            <button onClick={() => verwijder(item)} className="verwijder">
              <b>-</b>
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {winkelProduct.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2"> Product Prijs</div>
            <div className="col-1 text-right">${productPrijs.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"> BTW Prijs</div>
            <div className="col-1 text-right">${belasting.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"> verzendKosten</div>
            <div className="col-1 text-right">${verzendKosten.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <b> Totale Prijs</b>
            </div>
            <div className="col-1 text-right">
              <b>${totaalPrijs.toFixed(2)}</b>
            </div>
          </div>
          <div className="row">
            <button className="button" onClick={() => alert("besteld")}>
              bestellen
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
