import React from "react";

export default function Header(props) {
  const { winkelProduct } = props;
  return (
    <header className="head block center">
      <h1> Winkelwagen</h1>
      <div>
        <div>
          Winkelwagen{" "}
          {winkelProduct ? (
            <button className="icon">{winkelProduct}</button>
          ) : (
            " "
          )}
        </div>
      </div>
    </header>
  );
}
