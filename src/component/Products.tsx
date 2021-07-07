import React, { useContext } from 'react';
import { AppContext } from '../context/cartContext';
import { Types } from '../context/cartReducer';

export const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: Types.Add,
        })
      }}>
        click
        </button>
      {state.shoppingCart}
    </div>
  )
}