import React, { useContext } from 'react';
import { AppContext } from '../context/cartContext';
import { Types } from '../context/cartReducer';

export const CartItem = () => {
  const [form, setForm] = React.useState({
    name: "",
    price: 0
  });
  const { state ,dispatch } = React.useContext(AppContext);

  const handleForm = (type: string, value: string) => {
    setForm(form => ({
      ...form,
      [type]: value
    }));

    console.log(form);
  };

  const createProduct = () => {
    dispatch({
      type: Types.AddToCart,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        price: form.price
      }
    });
  };

  const deleteProduct = (id: number) => {
    dispatch({
      type: Types.DeleteToCart,
      payload: {
        id,
      }
    })
  }

  return (
    <div>
      <input
        value={form.name}
        onChange={e => {
          handleForm("name", e.target.value);
        }}
        placeholder="Name"
      />
      <input
        value={form.price}
        type="number"
        onChange={e => {
          handleForm("price", e.target.value);
        }}
        placeholder="Price"
      />
      <button onClick={createProduct}>create</button>
      <div style={{ marginTop: 20 }}>
        {state.products.map(c => (
          <div>
            <span>{c.name}</span>
            <span>{c.price}</span>
            <button onClick={() => deleteProduct(c.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
