import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import camisas from "../../data/selecoes.json";
import "./selecoes.css"

const Selecoes = () => {
  return (
    <>
      <div className="produtos">
      <h2>Camisas de Seleções Nacionais:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Selecoes;
