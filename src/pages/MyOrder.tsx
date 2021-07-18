import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useCart} from '../contexts/cartContext';
import { CartItemType } from '../pages/Home';

import '../styles/myorder.scss';



export function MyOrder() {

    const {orderPrice, orderProducts, userOrder, cartBuybutton, initiateBuy} = useCart();

    useEffect(() => {
       if(cartBuybutton)
       {
           console.log('order products dentro da página de carrinho dentro do useEffect0 com true')
       }

       console.log('order products dentro da página de carrinho fora do useeffect');
       console.log('Context cartContext dentro Myorder ', orderProducts, orderPrice);
       console.log('tamanho do orderproducts ', orderProducts?.length)

      }, []);


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
                        <div className="qtde-item">{product.amount}</div>
                    </div>
                    ))}
                </div>
                <div className="final-order">
                <div className="qtde-total">Valor total: {orderPrice}</div>
                <button className="final-order-button">Finalizar Pedido</button>
                </div>
              </div>
          </div>

        </>
    )
}