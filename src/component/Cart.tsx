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
    showCartPopup: boolean;
    setShowCartPopup: (showCartPopup: boolean) => void;
}



const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, showCartPopup,  setShowCartPopup}) => {
    const [totalCartItens, setTotalCartItens] = useState<number>(0);

    const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    // const totalItensCount = calculateTotal(cartItems);
    // for (let cartIs in cartItem){
    //     console.log(cartIs[price]);
    //   }
   
    console.log('Total do carrinho: ', totalCartItens)
    let history = useHistory();

    // const calcTotal = calculateTotal(cartItems);
    
    const {orderPrice, orderProducts, userOrder, cartBuybutton, initiateBuy} = useCart();
    const [buyItens, setBuyItens] = useState([] as CartItemType[]);
    const [totalItens, setTotalItens] = useState<number>(0);

    useEffect(() => {
        
        console.log('testando caritens que vai para o Cart.tsx', cartItems);
    }, [])
    
    function initiateBuyCart(items: CartItemType[],calculTotal: number){
        
        setBuyItens(items);
        setTotalItens(calculTotal);

        // initiateBuy(items, calculTotal);
        
        console.log('Context cartContext dentro Cart ', orderProducts, orderPrice);
        console.log('UseState cartContext dentro Cart ', buyItens, totalItens);
        history.push("/myorder");
    }

    
    console.log('carrinho iniciado com sucesso ', orderProducts);

    return (
            <>
            {showCartPopup ? 
            <div className="popupContainer">            
            <h2 className="cartItems-title">Carrinho de Compras</h2>
            {cartItems.length === 0 ?
            <p className="cartItems-title">Sem itens no carrinho</p> 
            : 
            <>
            <div className="cart">
            {cartItems.map(item  => (
                <CartItem 
                    key={item._id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            </div>
            <div className="cartItem-order">
                {/* <div className="cartItems-total">Valor total: R${calculateTotal(cartItems).toFixed(2)}</div> */}
                <div className="cartItems-total">Valor total: R$1000</div>
                <button className="final-cartItems-button" onClick={() => initiateBuyCart(cartItems, 1000)}>Finalizar Pedido</button>
            </div>
            </>}
            </div>
            : null}
            </>
    )
};

export default Cart;