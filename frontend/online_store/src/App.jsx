import React, { useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import PrivateRoute from "./routes/PrivateRoute";
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Cart from './components/cart/cart';
import Home from './pages/home/home';
import Brasileiras from './pages/brasileiras/brasileiras';
import Europeias from './pages/europeias/europeias';
import Selecoes from './pages/selecoes/selecoes';
import Retro from './pages/retro/retro';
import ProductDetail from './pages/productDetail/productDetail';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Payment from "./pages/payment/payment";
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();

  const hideHeaderRoutes = ['/login', '/signup', '/payment'];
  const hideHeader = hideHeaderRoutes.includes(location.pathname);

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
  {!hideHeader && (
    <Header
      toggleMenu={toggleMenu}
      toggleCart={toggleCart}
    />
  )}

  {!hideHeader && <Sidebar menuOpen={menuOpen} />}

  {!hideHeader && (
    <Cart
      cartOpen={cartOpen}
      cartItems={cartItems}
      increase={increase}
      decrease={decrease}
      total={total}
    />
  )}

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
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/payment" element={<PrivateRoute><Payment cartItems={cartItems} total={total} /></PrivateRoute>} />
    </Routes>
  </>
  );
}

export default App;
