import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ menuOpen }) => {
  const navigate = useNavigate();

  if (!menuOpen) return null;

  return (
    <div id="menu">
      <button onClick={() => navigate("/brasileiras")} className="menu-button">
        <img src="/icons/i_brasil.png" alt="Camisas Brasileiras" width="60px"/>
          Camisas Brasileiras
      </button>

      <button onClick={() => navigate("/europeias")} className="menu-button">
        <img src="/icons/i_europa.png" alt="Camisas Europeias" width="60px"/>
          Camisas Europeias
      </button>

      <button onClick={() => navigate("/selecoes")} className="menu-button">
        <img src="/icons/i_selecoes.png" alt="Camisas de Seleções" width="60px"/>
          Camisas de Seleções
      </button>

      <button onClick={() => navigate("/retro")} className="menu-button">
        <img src="/icons/i_retro.png" alt="Camisas Retrô" width="60px"/>
          Camisas Retrô
      </button>
    </div>
  );
};

export default Sidebar;
