import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';
import {AppProvider} from './context/cartContext';






function App() {
    
  
  return (

    <BrowserRouter>
    <AppProvider>
      <Route path="/" exact component={Home}/>
      <Route path="/signinlogin" component={Signinlogin}/>
      </AppProvider>
    </BrowserRouter>
    
  );
}

export default App;
