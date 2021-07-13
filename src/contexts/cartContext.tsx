import React, {createContext, useState} from 'react';
import { useAuth } from './authContext';
import {User} from '../contexts/authContext';

interface MyOrder {
    orderProducts: object;
    orderPrice: number;
    userOrder: User | null;
    cartBuybutton: boolean;
}

const CartContext = createContext<MyOrder>({} as MyOrder);

export const CartProvider: React.FC = ({ children }) => {

    const {signed, signIn, user} = useAuth();
    const [userOrder, setUserOrder] = useState<User | null>(null);
    const [orderPrice, setOrderPrice] = useState<number>(0);
    const [orderProducts, SetOrderProducts] = useState<object>({});

   
    function initiateBuy(){
        setUserOrder(user);
        

       
        
        console.log("log dentro do Cartcontext", userOrder);


    }


return(
    <CartContext.Provider value={{cartBuybutton: true, orderProducts: {}, orderPrice: 0, userOrder}}>
        { children }
    </CartContext.Provider>
)};

export default CartContext;
