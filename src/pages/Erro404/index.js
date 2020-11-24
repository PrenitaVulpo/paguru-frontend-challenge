import React from 'react';
import { useHistory } from 'react-router-dom';

function Erro404(){
  const {goBack} = useHistory();
  return(
    <div>
      <body>
        <h1>404</h1>
        <button type="button" onClick={goBack}>
          Voltar à página anterior
        </button>
      </body>
      <footer/>
    </div>
  )
}

export default Erro404;