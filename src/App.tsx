import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';

type Cart = {
  productId: number;
  name: string;
  totalQtde: number;
}

type CartContextType = {
  cart: Cart | undefined;
  incrementCart: () => void;
}

export const CartContext = createContext({} as CartContextType);


function App() {

  const [cart, setCart] = useState<Cart>();
 
  function incrementCart(){
    
  }
  return (
    <BrowserRouter>
    <CartContext.Provider value={{cart, incrementCart}}>
      <Route path="/" exact component={Home}/>
      <Route path="/signinlogin" component={Signinlogin}/>
    </CartContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
