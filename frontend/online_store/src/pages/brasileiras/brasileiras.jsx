import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import camisas from "../../data/brasileiras.json";
import "./brasileiras.css"

const Brasileiras = () => {

  return (
    <>
      <div className="produtos">
      <h2>Camisas do Futebol Brasileiro:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa}/>
        ))}
      </div>
      </div>
    </>
  );
}

export default Brasileiras;
