import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Signinlogin } from './pages/Signinlogin';
import {AppProvider} from './context/cartContext';
import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export type CartItemType = {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}

const getProducts = async(): Promise<CartItemType> =>
  await(await fetch("../Data/data")).json();

function App() {
    const {data, isLoading, error} = useQuery<CartItemType>('products', getProducts);
    console.log( 'inicial', getProducts );

    const getTotalItems = () => null;

    const handleAddToCart = (clickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

    // if(isLoading) return <LinearProgress />;
    if(error) return <div>Algo deu errado...</div>


  return (

    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/signinlogin" component={Signinlogin}/>
    </BrowserRouter>
    
  );
}

export default App;
