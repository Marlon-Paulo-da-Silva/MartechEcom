
import React, {createContext, useContext, useState} from 'react';
import { useAuth } from './authContext';
import {User} from '../contexts/authContext';
import { CartItemType } from '../pages/Home';

interface MyOrder {
    orderProducts: CartItemType[] | null;
    orderPrice: number;
    userOrder: User | null;
    cartBuybutton: boolean;
    initiateBuy: (product: CartItemType[], totalPrice: number) => void;
    
}

const CartContext = createContext<MyOrder>({} as MyOrder);

export const CartProvider: React.FC = ({ children }) => {

    const {signed, signIn, user} = useAuth();
    const [userOrder, setUserOrder] = useState<User | null>(null);
    const [orderPrice, setOrderPrice] = useState<number>(0);
    const [orderProducts, setOrderProducts] = useState<CartItemType[]>({} as CartItemType[]);

   
    const initiateBuy = (product: CartItemType[], totalPrice: number) => {

        setUserOrder(user);
        setOrderProducts(product)
        setOrderPrice(totalPrice)
        


       
        
        console.log("log dentro do Cartcontext", userOrder, orderProducts, orderPrice );
    }


return(
    <CartContext.Provider value={{cartBuybutton: true, orderProducts, orderPrice, userOrder, initiateBuy}}>
        { children }:
    </CartContext.Provider>
)};

export function useCart() {
  const context = useContext(CartContext);  

  return context;
}
