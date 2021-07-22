import CartItem from './CartItem';
import { useHistory } from "react-router-dom";
import { CartItemType } from '../pages/Home';
import {useCart} from '../contexts/cartContext';
import { useContext, useEffect, useState } from 'react';
import  {User}  from  '../contexts/authContext';
import '../styles/cartPopup.scss';


type Props = {
    showCartPopup: boolean;
    setShowCartPopup: (showCartPopup: boolean) => void;
}


const cartPopup: React.FC<Props> = ({ showCartPopup,  setShowCartPopup}) => {


    return (
        <div className="popupContainer">
        {showCartPopup ? <h1>Marlon</h1> : null}
            
        </div>
    )

}

export default cartPopup;