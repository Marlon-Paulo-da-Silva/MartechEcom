import CartItem from './CartItem';
import { CartItemType } from '../pages/Home';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    return (
        <div>
            <h2>Seu Carrinho de Compras</h2>
            {cartItems.length === 0 ? <p>Sem itens no carrinho</p> : null}
            {cartItems.map(item  => (
                <CartItem 
                    key={item._id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </div>
    )
};

export default Cart;