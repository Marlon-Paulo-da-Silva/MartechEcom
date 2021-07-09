import React from "react";
import { useContext, useState} from "react";

import { Cartbutton } from "../Component/Cartbutton";
import { CartItem } from "../Component/CartItem";
import {Item} from "../Component/Item";


import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export type CartItemType = {
  _id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}



//integrar com a API
const getProducts = async(): Promise<CartItemType[]> =>
  await(await fetch("https://raw.githubusercontent.com/Marlon-Paulo-da-Silva/MartechEcom/main/src/Data/data.json")).json();

type Products = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

export function Home() {

    const [cartOpen, setCartOpen] = useState(false);
    const [carItems, setCartItems] = useState([] as CartItemType[]);




    const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);



    const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, items) => ack + items.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

 

    

    return (
        <div>
            <section className="section destaque">
                <div className="titulo">
                    <h1>Produtos em Destaque</h1>
                </div>
                <div className="DrawerStyle">
                    <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                        Carrinho de compras
                    </Drawer>
                </div>
                
                <div className="IconButtonStyle" onClick={() => setCartOpen(true)}>
                    <Badge badgeContent={getTotalItems(carItems)} color='error' />
                    <ShoppingCartIcon />
                </div>

                
                <div className="container">
                    {data?.map((item) => (
                       <Item item={item}  handleAddToCart={handleAddToCart}/>
                    ))}  
                </div>
                
            
            </section>
        </div>
    )
}