import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import camisas from "../../data/retro.json";
import "./retro.css"

const Retro = () => {
  return (
    <>
      <div className="produtos">
      <h2>Camisas do Futebol Retrô:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Retro;
