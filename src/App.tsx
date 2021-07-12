import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';
import {AppProvider} from './context/cartContext';
import {AuthProvider} from './contexts/authContext';




function App() {
  return (

    <BrowserRouter>
     <AuthProvider>
      <Route path="/" exact component={Home}/>
      <Route path="/signinlogin" component={Signinlogin}/>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
