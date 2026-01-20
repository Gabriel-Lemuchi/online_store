import React from "react";
import { useParams } from "react-router-dom";
import produtos from "../../data/produtos";
import "./productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div className="product-detail">
      <div id="details">
        <img src={produto.imagem} alt={produto.name} width="420px"/>
        <h1>{produto.name}</h1>
        <p>{produto.descriçao}</p>
        <strong>{produto.preco}</strong>
      </div>
      <div id="add_cart_section">
        <p>Selecione a quantidade a adicionar no carrinho:</p>
        <div id="add_buttons">
          <button id="-">-</button>
          <h2>0</h2>
          <button id="+">+</button>
        </div>
        <p>Valor total: <b>R$ 0,00</b></p>
        <button id="add_cart"><b>Adicionar ao Carrinho</b></button>
        <div id="addictional_text">
          <p>✔ Produto oficial licenciado</p>
          <p>✔ Envio em até 72h</p>
          <p>✔ Troca grátis em 7 dias</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
