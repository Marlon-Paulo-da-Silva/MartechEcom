import Button from "@material-ui/core/Button";

import { CartItemType } from '../pages/Home';
import '../styles/cartItem.scss';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;

}

type TotalOrder = {
  qtde: number;
}





const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {


  return (
  <div>
    <div className="cartItem-container">
      {/* <img src={item.image} alt={item.name} />
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
    </div> */}
      <div className="block-cartItem">                    
              <div className="block-cartItem">

              <div className="description-cartItem">
              
                  <img className="img-cartItem" src={item.image} alt="imagemitem" />
                  <div className="about-cartItem">
                      <span>{item.name}</span>
                      <span>Preço: {item.totalPrice}</span>
                  </div>
              </div>
              
          </div>
          <div className="buttons-cartItem">
          <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => addToCart(item)}
              >
                +
              </Button>
              <p>{!!item.amount && item.amount}</p>
              <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => removeFromCart(item._id)}
              >
                -
          </Button>
        </div>
      </div>
      
      
    </div>
    
  </div>
  )
};

export default CartItem;