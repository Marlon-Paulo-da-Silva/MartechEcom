import { useState ,useContext, createContext, ButtonHTMLAttributes } from 'react';
import { AppContext } from '../context/cartContext';

import CartContext from '../App'

type CartbuttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Cartbutton(props: CartbuttonProps){

  const { state, dispatch } = useContext(AppContext);


  return(
    <div>
      <button className="cart-container" >
        <div className="cart-button">
          <span>cart</span>
        </div>
        <div className="cart-content_item-card">
          <img src="" alt="" />
          <div className="item-cart"></div>
        </div>
        <span className="cart-icon"><i className='bx bx-cart-alt'></i></span>
        <span className="cart-qtde">{state.shoppingCart}</span>
      </button>
    </div>
  );
}