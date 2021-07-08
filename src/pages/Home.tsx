import { useContext } from "react";

import { Cartbutton } from "../Component/Cartbutton";
import { Products } from "../Component/Products";
import { CartItem } from "../Component/CartItem";

import { AppContext } from '../context/cartContext';
import { Types } from '../context/cartReducer';

import products from "../Data/data";


export function Home() {

    const { state, dispatch } = useContext(AppContext);


    return (
        <div>
            <section className="section destaque">
                <div className="titulo">
                    <h1>Produtos em Destaque</h1>
                </div>
                <Cartbutton></Cartbutton>
                <Products></Products>
                <CartItem></CartItem>
                <div className="container">
                    {products.map( (product) => (
                       <div className="card">
                           <img className="card_img" src={product.image} alt="product" />

                           <div className="card_data">
                               <h1 className="card_title">
                                   {product.name}
                               </h1>
                               <span className="card_price">{product.price}</span>
                               <p className="card_description">Lorem ipsum dolor consectetur adipisicing elit. Tenet</p>
                               
                               <a href="#" className="card_button" onClick={() => {
                                    dispatch({
                                    type: Types.Add,
                                    })
                                }}>Adicionar ao Carrinho</a>
                           </div>
                        </div>
                    ))}  
                </div>
            </section>
        </div>
    )
}