import CartItem from './CartItem';
import { CartItemType } from '../pages/Home';
import CartContext from '../contexts/cartContext';
import { useContext } from 'react';
import  {User}  from  '../contexts/authContext';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

type MyOrder = {
    orderProducts: CartItemType[];
    orderPrice: number;
    user: User | null;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    const {cartBuybutton} = useContext(CartContext);

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
            <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
        </div>
    )
};

export default Cart;