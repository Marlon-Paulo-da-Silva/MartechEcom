import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';
import {AuthProvider} from './contexts/authContext';
import {CartProvider} from './contexts/cartContext';




function App() {
  return (

    <BrowserRouter>
     <AuthProvider>
        <CartProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/signinlogin" component={Signinlogin}/>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
