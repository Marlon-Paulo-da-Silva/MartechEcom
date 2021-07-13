import React, {createContext} from 'react';

const CartContext = createContext({signed: true});

export const CartProvider: React.FC = ({ children }) => (
    <CartContext.Provider value={{signed: true}}>
        { children }
    </CartContext.Provider>
);

export default CartContext;
