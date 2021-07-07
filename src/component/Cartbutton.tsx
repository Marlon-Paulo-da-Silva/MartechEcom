import { useState ,useContext, createContext, ButtonHTMLAttributes } from 'react';
import CartContext from '../App'

type CartbuttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Cartbutton(props: CartbuttonProps){

  return(
    <div>
      <button className="cartbutton" {...props}>
        <span className="cart-icon"><i className='bx bx-cart-alt'></i></span>
        <span className="cart-qtde">1</span>
      </button>
    </div>
  );
}