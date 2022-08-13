import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Winkelwagen from "./components/Winkelwagen";
import producten from "./producten";

function App() {
  const { products } = producten;
  const [winkelProduct, setProduct] = useState([]);
  const toevoegen = (product) => {
    const bestaat = winkelProduct.find((x) => x.id === product.id);
    if (bestaat) {
      setProduct(
        winkelProduct.map((x) =>
          x.id === product.id ? { ...bestaat, qty: bestaat.qty + 1 } : x
        )
      );
    } else {
      setProduct([...winkelProduct, { ...product, qty: 1 }]);
    }
  };
  const verwijder = (product) => {
    const bestaat = winkelProduct.find((x) => x.id === product.id);
    if (bestaat.qty === 1) {
      setProduct(winkelProduct.filter((x) => x.id !== product.id));
    } else {
      setProduct(
        winkelProduct.map((x) =>
          x.id === product.id ? { ...bestaat, qty: bestaat.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header winkelProduct={winkelProduct.length}></Header>
      <div className="row">
        <Main toevoegen={toevoegen} products={products}></Main>
      </div>
      <div className="winkel">
        <Winkelwagen
          toevoegen={toevoegen}
          verwijder={verwijder}
          winkelProduct={winkelProduct}
        ></Winkelwagen>
      </div>
    </div>
  );
}

export default App;
