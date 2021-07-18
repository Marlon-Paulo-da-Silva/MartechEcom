import CartItem from './CartItem';
import { useHistory } from "react-router-dom";
import { CartItemType } from '../pages/Home';
import {useCart} from '../contexts/cartContext';
import { useContext, useEffect, useState } from 'react';
import  {User}  from  '../contexts/authContext';
import '../styles/cart.scss';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}



const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    let history = useHistory();

    const calcTotal = calculateTotal(cartItems);
    
    const {orderPrice, orderProducts, userOrder, cartBuybutton, initiateBuy} = useCart();
    const [buyItens, setBuyItens] = useState([] as CartItemType[]);
    const [totalItens, setTotalItens] = useState<number>(0);

    useEffect(() => {
        
        console.log('testando caritens que vai para o Cart.tsx', cartItems);
    }, [cartItems])
    
    function initiateBuyCart(items: CartItemType[],calculTotal: number){
        
        setBuyItens(items);
        setTotalItens(calculTotal);

        initiateBuy(items, calculTotal);
        
        console.log('Context cartContext dentro Cart ', orderProducts, orderPrice);
        console.log('UseState cartContext dentro Cart ', buyItens, totalItens);
        history.push("/myorder");
    }


    console.log('carrinho iniciado com sucesso ', orderProducts);

    return (
        <div>
            <h2>Seu Carrinho de Compras</h2>
            <div className="cart">
            {cartItems.length === 0 ? <p>Sem itens no carrinho</p> : null}
            {cartItems.map(item  => (
                <CartItem 
                    key={item._id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: R${calculateTotal(cartItems)}</h2>
            </div>
            <button className="login" onClick={() => initiateBuyCart(cartItems, calcTotal)}> <i className='bx bxs-user-circle'></i> Comprar</button>
        </div>
    )
};

export default Cart;