import React from "react";
import './header.css';

const Header = ({ toggleMenu, toggleCart}) => {
  return (
    <>
    <header>
      <button id="hamburguer_button" onClick={ toggleMenu }><img src="/icons/hamburguer.png" width="40px"/></button>
      <h1>OnlineStore</h1>
      <button id="carrinho_button" onClick={ toggleCart }><img src="/icons/carrinho-de-compras.png" width="40px"/></button>
    </header>
    </>
  );
}

export default Header;
