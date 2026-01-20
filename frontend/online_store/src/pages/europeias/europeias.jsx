import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import camisas from "../../data/europeias.json";
import "./europeias.css"

const Europeias = () => {
  return (
    <>
      <div className="produtos">
      <h2>Camisas do Futebol Europeu:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Europeias;
