import React from 'react';
import { useHistory} from 'react-router-dom';
//import Header from '../../assets/components/header';
import Nav from '../../assets/components/nav/index';
import Feed from '../../assets/components/feedComponent';
import './style.css'

function FeedPage(){
  const history = useHistory();

  if(localStorage.getItem("token") !=null){
    return(
      <div className="feed">
        <Nav />
        <Feed classname="container"/>
      </div>
    )
    } else {
      alert("Você precisa iniciar a sua sessão");
      history.push("/");
    }
}


export default FeedPage