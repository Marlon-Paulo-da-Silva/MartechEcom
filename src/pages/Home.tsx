import React from "react";
import { useContext, useState} from "react";
import {useQuery} from 'react-query';

import AuthContext from "../contexts/authContext";

import { Cartbutton } from "../Component/Cartbutton";
import  CartItem  from "../Component/CartItem";
import { Item } from "../Component/Item";
import Cart from "../Component/Cart";




import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";



export type CartItemType = {
  _id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
  totalproduct: number;
}



//integrar com a API
const getProducts = async(): Promise<CartItemType[]> =>
  await(await fetch("https://raw.githubusercontent.com/Marlon-Paulo-da-Silva/MartechEcom/main/src/Data/data.json")).json();

type Products = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

export function Home() {
    const {signed} = useContext(AuthContext);

    


    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);


    const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);



    const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, items) => ack + items.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => (
        setCartItems(prev => {
            const isItemCart = prev.find(item => item._id === clickedItem._id )
        
        
            if(isItemCart) {
                return prev.map(item => (item._id === clickedItem._id ?
                    {...item, amount: item.amount + 1} : item))
            }

            return [...prev, {...clickedItem, amount: 1}];
        })
    );

    const handleRemoveFromCart = (id: number) => (
        setCartItems(prev => (
            prev.reduce((ack, item) => {
                if(item._id === id){
                    if (item.amount === 1) return ack;
                    return [...ack, {...item, amount: item.amount - 1}];
                } else {
                    return [...ack, item];
                }
            }, [] as CartItemType[])
        ))
    );
    

    return ( 
        <div>

            {signed  ? <Link to="/signinlogin"><button className="login"> <i className='bx bxs-user-circle'></i> Minha Conta</button></Link> : <Link to="/signinlogin"><button className="login"> <i className='bx bxs-user-circle'></i> Entrar no sistema</button></Link>}
            
            <section className="section destaque">
                <div className="titulo">
                    <h1>Produtos em Destaque</h1>
                </div>
                <div className="DrawerStyle">
                    <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                        
                        <Cart 
                            cartItems={cartItems} 
                            addToCart={handleAddToCart}
                            removeFromCart={handleRemoveFromCart}  />
                    </Drawer>
                </div>
                
                <div className="IconButtonStyle" onClick={() => setCartOpen(true)}>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error' />
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