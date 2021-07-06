import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';

type CartContextType = {
  productId: number;
  name: string;
  totalQtde: number;

}

export const CartContext = createContext({} as any);




function App() {

  const [cart, setCart] = useState(0);

  function incrementCart(){
    setCart(cart + 1);
  }
  return (
    <BrowserRouter>
    <CartContext.Provider value={{cart, setCart}}>
      <Route path="/" exact component={Home}/>
      <Route path="/signinlogin" component={Signinlogin}/>
    </CartContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
