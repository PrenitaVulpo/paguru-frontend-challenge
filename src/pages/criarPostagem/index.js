import React, {useState} from 'react';
import apiMock from '../../services/MockAPIs/posts-no-header';
//import api from '../../services/api';
import Nav from '../../assets/components/nav'
import { useHistory} from 'react-router-dom';


function CriarPostagem(){
  const [text, setText] = useState('');
  const history = useHistory();
  
  async function handleSubmit(){
    let content = `{"content": "${text}"}`;


    /*await apiMock.post('/posts', content)
      .then(response=>{
          alert("post criado com sucesso!");
          history.push('/feed')
      }).catch(error=>{
        alert("problema na criação do post");
        console.log(error.message)
      })*/


    await apiMock.post('/posts', content)
      .then(response=>{
          alert("post criado com sucesso!");
          history.push('/feed')
      }).catch(error=>{
        alert("problema na criação do post");
        console.log(error.message)
      })
  }

  return(
    <div>
      <Nav/>
      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <div className="center-align">
                <textarea onChange={(s)=>setText(s.target.value)}></textarea>
                <button type="button" onClick={handleSubmit}>Publicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CriarPostagem;