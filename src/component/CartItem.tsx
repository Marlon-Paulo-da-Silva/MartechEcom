import Button from "@material-ui/core/Button";

import { CartItemType } from '../pages/Home';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;

}

type TotalOrder = {
  qtde: number;
}



const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className="cartItem">
    <h3>{item.name}</h3>
    <div className="information">
      <p>Preço: ${item.price}</p>
      <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
    </div>
    <div className="buttons">
    <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item._id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
    </div>
    <img src={item.image} alt={item.name} />
  </div>
);

export default CartItem;