import React, {createContext} from 'react';

interface MyOrder {
    orderProducts: object;
    orderPrice: number;
    user: object;
    cartBuybutton: boolean;
}

const CartContext = createContext<MyOrder>({} as MyOrder);

export const CartProvider: React.FC = ({ children }) => (
    <CartContext.Provider value={{cartBuybutton: true, orderProducts: {}, orderPrice: 0, user: {}}}>
        { children }
    </CartContext.Provider>
);

export default CartContext;
