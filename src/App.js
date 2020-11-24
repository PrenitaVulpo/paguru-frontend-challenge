import './assets/styles/global.css';
import React from 'react'
import Router from './router.js'
import {AuthProvider} from '../src/assets/context/authContext';



function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
