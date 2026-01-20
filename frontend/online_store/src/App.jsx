import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Cart from './components/cart/cart';
import Home from './pages/home/home';
import Brasileiras from './pages/brasileiras/brasileiras';
import Europeias from './pages/europeias/europeias';
import Selecoes from './pages/selecoes/selecoes';
import Retro from './pages/retro/retro';
import ProductDetail from './pages/productDetail/productDetail';
import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleCart(){
    setCartOpen(!cartOpen);
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} toggleCart={toggleCart} />

      <Sidebar menuOpen={menuOpen} />
      <Cart cartOpen={cartOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brasileiras" element={<Brasileiras />} />
        <Route path="/europeias" element={<Europeias />} />
        <Route path="/selecoes" element={<Selecoes />} />
        <Route path="/retro" element={<Retro />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
