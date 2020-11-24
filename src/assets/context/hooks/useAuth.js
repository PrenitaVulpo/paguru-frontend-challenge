import { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import api from '../../../services/api';
import apiMock from '../../../services/MockAPIs/posts-no-header';
import history from '../history';


export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `token ${JSON.parse(token)}`;
      apiMock.defaults.headers.Authorization = `token ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    /*const { data: { token } } = await api.post('/auth');

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `token ${token}`;
    setAuthenticated(true);
    history.push('/feed');*/
    const { data: { token } } = await apiMock.post('/auth');

    localStorage.setItem('token', JSON.stringify(token));
    apiMock.defaults.headers.Authorization = `token ${token}`;
    setAuthenticated(true);
    history.push('/feed');
    //return <Redirect to="/feed"/>

  }

  function handleLogout() {
    /*setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    history.push('/');*/
    setAuthenticated(false);
    localStorage.removeItem('token');
    apiMock.defaults.headers.Authorization = null;
    //history.push('/');
    return <Redirect to="/"/>
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}