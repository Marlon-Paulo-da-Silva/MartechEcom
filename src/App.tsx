import {AuthProvider} from './contexts/authContext';
import {CartProvider} from './contexts/cartContext';
import { Routes } from './routers';




function App() {
  return (

    
     <AuthProvider>
        <CartProvider>
        <Routes />
        </CartProvider>
      </AuthProvider>
    
    
  );
}

export default App;
