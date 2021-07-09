import Button from "@material-ui/core/Button";

import { CartItemType } from '../pages/Home';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;

}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div>
    <h3>{item.name}</h3>
    <div className="information">
      <p>Preço: ${item.price}</p>
      <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
    </div>
    <div className="button"></div>
  </div>
);

export default CartItem;