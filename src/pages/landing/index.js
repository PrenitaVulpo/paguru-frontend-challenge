import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './style.css'
import 'materialize-css/dist/css/materialize.min.css'
import {Context} from '../../assets/context/authContext'

function Landing(){

  const {authenticated, handleLogin} = useContext(Context);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  console.log( authenticated)
  function handleEntrada(login){
    localStorage.setItem('session', 'amargo');
    handleLogin(`{"username": "${login}", "password": "${senha}"}`)

  }

  return(
    <>

      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <div className="center-align">
                <img src={Logo} alt="Paguru" />
                <h4>Login</h4>
              </div>
              <div className="inputs">
                <div className="input-block">
                  <label htmlFor="usuario" id="label">Usuário</label><br />
                  <input type="text" name="usuario" id="input"
                    onChange={(s) => setLogin(s.target.value)} />
                </div>
                <div className="input-block">
                  <label htmlFor="senha" id="label">Senha</label><br />
                  <input type="password" name="senha" id="input"
                    onChange={(s) => setSenha(s.target.value)} />
                </div>
              </div>
              <div className="center-align">
                <button onClick={handleEntrada(login)}>entrar</button>
                <br />
                <Link to="/cadastro" id="routeLink">Não tem conta? Cadastre-se aqui!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Landing;