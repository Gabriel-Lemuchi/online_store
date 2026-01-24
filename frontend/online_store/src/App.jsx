import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Cart from './components/cart/cart';

import Home from './pages/home/home';
import Brasileiras from './pages/brasileiras/brasileiras';
import Europeias from './pages/europeias/europeias';
import Selecoes from './pages/selecoes/selecoes';
import Retro from './pages/retro/retro';
import ProductDetail from './pages/productDetail/productDetail';

import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  function toggleCart() {
    setCartOpen(prev => !prev);
  }

  function addToCart(product) {
    setCartItems(prev => {
      const itemExists = prev.find(item => item.id === product.id);

      if (itemExists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prev, product];
    });

    // 🔥 abre o carrinho automaticamente
    setCartOpen(true);
  }

  function increase(id) {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id) {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.preco) * item.quantity,
    0
  );

  return (
    <>
      <Header toggleMenu={toggleMenu} toggleCart={toggleCart} />

      <Sidebar menuOpen={menuOpen} />

      <Cart
        cartOpen={cartOpen}
        cartItems={cartItems}
        increase={increase}
        decrease={decrease}
        total={total}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brasileiras" element={<Brasileiras />} />
        <Route path="/europeias" element={<Europeias />} />
        <Route path="/selecoes" element={<Selecoes />} />
        <Route path="/retro" element={<Retro />} />
        <Route
          path="/produto/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
