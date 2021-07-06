import { useContext } from 'react';
import CartContext from '../App'

export function Cartbutton(){

  return(
    <div>
      <button className="cartbutton">
        <span className="cart-icon"><i className='bx bx-cart-alt'></i></span>
        <span className="cart-qtde">1</span>
      </button>
    </div>
  );
}