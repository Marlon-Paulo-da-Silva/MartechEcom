import React from "react";
import { useContext } from "react";

import { Cartbutton } from "../component/Cartbutton";
import { CartItem } from "../component/CartItem";
import Item from "../component/Item";

import products from "../Data/data";

import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export type CartItemType = {
  _id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}

// integrar com a API
const getProducts = async(): Promise<CartItemType[]> =>
  await(await fetch("../Data/data")).json();


export function Home() {

    const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
    console.log( 'inicial', getProducts );

    const getTotalItems = () => null;

    const handleAddToCart = (clickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

 

    

    return (
        <div>
            <section className="section destaque">
                <div className="titulo">
                    <h1>Produtos em Destaque</h1>
                </div>

                {/* Precisa adicionar o elemento */}
                <div className="container">
                    {data?.map((item) => (
                       <Item item={item}  handleAddToCart={handleAddToCart}/>
                    ))}  
                </div>
                
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
                               
                               <a href="#" className="card_button" onClick={() => {  }}>Adicionar ao Carrinho</a>
                           </div>
                        </div>
                    ))}  
                </div>
            </section>
        </div>
    )
}