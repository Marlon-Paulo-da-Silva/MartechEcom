import { useContext } from "react";
import { Cartbutton } from "../Component/Cartbutton";
import products from "../Data/data";


export function Home() {
    return (
        <div>
            <section className="section destaque">
                <div className="titulo">
                    <h1>Produtos em Destaque</h1>
                </div>
                <Cartbutton></Cartbutton>
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
                               <a href="#" className="card_button">Comprar Agora</a>
                               <a href="#" className="card_addtocart">Adicionar ao Carrinho</a>
                           </div>
                        </div>
                    ))}  
                </div>
            </section>
        </div>
    )
}