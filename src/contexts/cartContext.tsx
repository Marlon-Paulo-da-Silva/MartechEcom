
import React, {createContext, useContext, useEffect, useState} from 'react';
import { toast} from 'react-toastify';
import { useAuth } from './authContext';
import {User} from '../contexts/authContext';
import { CartItemType } from '../pages/Home';

interface MyOrder {
    orderProducts: CartItemType[] | null;
    orderPrice: number;
    totalQtdeOrder: number;
    userOrder: User | null;
    cartBuybutton: boolean;
    initiateBuy: (product: CartItemType[], totalPrice: number) => void;
    addProduct: (product: CartItemType) => void;
    removeFromCart: (id: number) => void;
    
}

const CartContext = createContext<MyOrder>({} as MyOrder);

export const CartProvider: React.FC = ({ children }) => {

    const {signed, signIn, user} = useAuth();
    const [userOrder, setUserOrder] = useState<User | null>(null);
    const [orderPrice, setOrderPrice] = useState<number>(0);
    const [totalQtdeOrder, setTotalQtdeOrder] = useState<number>(0);
    const [orderProducts, setOrderProducts] = useState<CartItemType[]>({} as CartItemType[]);

    useEffect(() => {

        setOrderProducts(() => {

            const storagedCart = localStorage.getItem('@MartechEcom:cart')
           
            if(storagedCart && storagedCart){
                return JSON.parse(storagedCart);
            }

            return [];

        });

        
        


    }, [])

    
    // const calcAmountTotal = ( () => {
    //     console.log('console dentro calcamount',orderProducts);
    //     return orderProducts.reduce((ack: number, item) => ack + item.amount, 0)
    
    // });
    const calcAmountTotal = () => {
        let count = 0;
        orderProducts.map(item => (
            setTotalQtdeOrder(count + item.amount)
        ))
        console.log('###console dentro calcamountTotal: ');

    };
    // const calcAmountTotal = (items: CartItemType[]) => {
    //     items.reduce((ack: number, item) => ack + item.amount, 0)
    // };
        // const amountTotal = calcAmountTotal(orderProducts);
        // setTotalQtdeOrder(amountTotal);
        console.log('***|||||||***calcAmountTotal: ', calcAmountTotal);

   
    const addProduct = (product: CartItemType) => {
        // setOrderProducts([...orderProducts, product]);

        
            const isItemCart = orderProducts.find(item => item._id === product._id )
        
            
            if(isItemCart) {
                
                return orderProducts.map(item => (item._id === product._id ?
                    {...orderProducts, amount: Number(item.amount + 1)} : item))
            }
            console.log('contexto na Home dentro do addToCart', orderProducts);
            

            setOrderProducts( [...orderProducts, {...product, amount: 1}]);
    }

    const removeFromCart = (id: number) => (
        setOrderProducts(prev => (
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
    const initiateBuy = (product: CartItemType[], totalPrice: number) => {

        // if(signed) {
            
        setUserOrder(user);
        setOrderProducts(product)
        setOrderPrice(totalPrice)
        // toast('é necessário realizar o login');
        localStorage.setItem('@MartechEcom:cart', JSON.stringify(orderProducts));
        localStorage.setItem('@MartechEcom:totalprice', JSON.stringify(orderPrice));
        console.log("log dentro do Cartcontext", userOrder, orderProducts, orderPrice );
        // alert('Pedido Realizado');

        // } else {
            // alert('é necessário realizar o login')
        // }

       
    }

        
    


return(
    <CartContext.Provider value={{cartBuybutton: !!orderProducts, orderProducts, orderPrice, userOrder, initiateBuy, addProduct, removeFromCart, totalQtdeOrder}}>
        { children }:
    </CartContext.Provider>
)};

export function useCart() {
  const context = useContext(CartContext);  

  return context;
}
