import { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";

import { Link, useHistory } from 'react-router-dom';
import {useCart} from '../contexts/cartContext';
import { CartItemType } from './Home';

import '../styles/myorder.scss';
type Props  = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


export function Thankyou() {
    let history = useHistory();
    

    useEffect(() => {
      

      }, []);

     



    return(
        <>
        <Link to="/"><button className="back"> <i className='bx bx-arrow-back' /> Voltar</button></Link>
          <div className="geral-container">
              
          </div>

        </>
    )
}