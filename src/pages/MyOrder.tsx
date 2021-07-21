import { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link, useHistory } from 'react-router-dom';
import {useCart} from '../contexts/cartContext';
import { CartItemType } from '../pages/Home';

import '../styles/myorder.scss';
type Props  = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


export function MyOrder() {
    let history = useHistory();
    const {orderPrice, orderProducts, userOrder, cartBuybutton, initiateBuy, addProduct, removeFromCart} = useCart();

    const [cartItems, setCartItems] = useState([] as CartItemType[]);



    useEffect(() => {
       if(cartBuybutton)
       {
           console.log('order products dentro da página de carrinho dentro do useEffect0 com true')
       }
       setCartItems(orderProducts => {
           return [...orderProducts];
       })
       console.log('order products dentro da página de carrinho fora do useeffect');
       console.log('Context cartContext dentro Myorder ', orderProducts, orderPrice);
       console.log('######Context cartContext dentro Myorder ', cartItems);
       console.log('tamanho do orderproducts ', orderProducts?.length)

      }, [orderProducts]);

      function initiateBuyCart(items: CartItemType[],calculTotal: number){
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
        </Alert>
        initiateBuy(items, calculTotal);
        
        
        // history.push("/");
    }

    const addToCart = (clickedItem: CartItemType) => {
        console.log('context ANTES Do addProduct dentro do handle', orderProducts);

        addProduct(clickedItem);
        console.log('context após o addProduct dentro do handle', orderProducts);
        console.log('clickedItem após o addProduct dentro do handle', (clickedItem.amount += 1));


    }

    const handleRemoveFromCart = (id: number) =>{ 
        removeFromCart(id);
    }


    return(
        <>
        <Link to="/"><button className="back"> <i className='bx bx-arrow-back' /> Voltar</button></Link>
          <div className="geral-container">
              <h1 className="title-container">Carrinho de Compra</h1>
              <div className="itens-container">
                <div className="block-itens">
                    {orderProducts?.length === 0 ? <p>Sem itens no carrinho</p> : null}
                    {orderProducts?.map(product => (
                        <div className="block-item">

                        <div className="description-item">
                        
                            <img className="img-carrinho" src={product.image} alt="imagemitem" />
                            <div className="about-item">
                                <span>Name: {product.name}</span>
                                <span>Preço: {product.price}</span>
                            </div>
                        </div>
                        <div className="qtde-item">
                        <Button
                            size='small'
                            disableElevation
                            variant='contained'
                            onClick={() => addToCart(product)}
                        >
                            +
                        </Button>
                        <p>{product.amount}</p>
                        <Button
                            size='small'
                            disableElevation
                            variant='contained'
                            onClick={() => removeFromCart(product._id)}
                        >
                            -
                        </Button>

                            </div>
                    </div>
                    ))}
                </div>
                <div className="final-order">
                <div className="qtde-total">Valor total: {orderPrice}</div>
                <button className="final-order-button" onClick={() => initiateBuyCart(cartItems, 1000)}>Finalizar Pedido</button>
                </div>
              </div>
          </div>

        </>
    )
}