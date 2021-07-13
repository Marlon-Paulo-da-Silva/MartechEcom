import React, {createContext, useContext, useState} from 'react';
import { CartItemType } from '../pages/Home';
import { User } from './authContext';

import {useAuth} from '../contexts/authContext';

interface MyOrderData {
    orderProducts: object;
    orderPrice: number;
    userOrder: User | null;
}




const CartContext = createContext<MyOrderData>({} as MyOrderData);

export const CartProvider: React.FC = ({ children }) => {
    const {user} = useAuth();

    const [userOrder, setUserOrder] = useState<User | null>(null);

    setUserOrder(user);
    
    
    
    
    return (
    <CartContext.Provider value={{orderProducts: {}, orderPrice: 0, userOrder}}>
        { children }
    </CartContext.Provider>
)};

export function useCart() {
    const context = useContext(CartContext);  
  
    return context;
  }