import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';





function App() {
    
  
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/signinlogin" component={Signinlogin}/>
    </BrowserRouter>
    
  );
}

export default App;
