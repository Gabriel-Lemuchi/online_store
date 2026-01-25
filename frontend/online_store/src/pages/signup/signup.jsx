import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name,
      email,
      password
    });
  }

  return (
    <div className="container">
      <div className="container_header">
        <h2>CRIAR CONTA</h2>
        <h4>Cadastre-se para concluir sua compra</h4>
      </div>

      <div className="container_form">
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Criar conta</button>

          <p className="login-link">
            Já possui login?{" "}
            <Link to="/login">Faça login clicando aqui</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
