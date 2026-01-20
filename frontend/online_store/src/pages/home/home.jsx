import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Seja bem-vindo à OnlineStore!</h1>
      <h2>Confira nossas camisas por um ótimo preço:</h2>

      <div id="cards">
        <div className="section_card">
          <h2>Futebol Brasileiro</h2>
          <img src="/images/cruzeiro_shirt.jpg" alt="Camisa do Cruzeiro" width="220px"/>
          <button onClick={() => navigate("/brasileiras")}>
            Ver uniformes
          </button>
        </div>

        <div className="section_card">
          <h2>Futebol Europeu</h2>
          <img src="/images/liverpool_shirt.jpg" alt="Camisa do Liverpool" width="220px"/>
          <button onClick={() => navigate("/europeias")}>
            Ver uniformes
          </button>
        </div>

        <div className="section_card">
          <h2>Seleções Nacionais</h2>
          <img src="/images/england_shirt.jpg" alt="Camisa da Inglaterra" width="220px"/>
          <button onClick={() => navigate("/selecoes")}>
            Ver uniformes
          </button>
        </div>

        <div className="section_card">
          <h2>Camisas Retrô</h2>
          <img src="/images/vasco_retro.jpg" alt="Camisa retrô do Vasco" width="220px"/>
          <button onClick={() => navigate("/retro")}>
            Ver uniformes
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
