import React, {useContext}from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './pages/landing';
import Cadastro from './pages/cadastro';
import Erro404 from './pages/Erro404';
import Feed from './pages/feed';
import Users from './pages/ListUsers';
import User from './pages/user';
import PostPost from './pages/criarPostagem';
import EditPost from './pages/editarPost';
import {Context} from '../src/assets/context/authContext';


function CustomRoute({isPrivate, ...rest}){
  const {loading, authenticated} = useContext(Context);

  if(loading){
    return <h1>Loading...</h1>
  }

  if (isPrivate && !authenticated){
    return <Redirect to="/"></Redirect>
  } 
  
  //return <Redirect to="/feed"/>
  return <Route {...rest}/>
}


const Router = () => {
  return(
    
      <BrowserRouter>
        <Switch>
          <CustomRoute exact path="/" component={Landing} />
          <CustomRoute isPrivate exact path="/cadastro" component={Cadastro}/>
          <CustomRoute isPrivate exact path="/feed" component={Feed}/>
          <CustomRoute isPrivate exact path="/users" component={Users}/>
          <CustomRoute isPrivate exact path="/user/:id" component={User}/>
          <CustomRoute isPrivate exact path="/post" component={PostPost}/>
          <CustomRoute isPrivate exact path="/post/:id" component={EditPost}/>
          <CustomRoute component={Erro404}/> 
        </Switch>
      </BrowserRouter>    
  )
}

export default Router;