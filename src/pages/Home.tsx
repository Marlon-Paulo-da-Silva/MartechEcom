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
                <div className="produto-centro container">
                    {products.map( (product) => (
                       <div className="produto">
                        <div className="cabecalho-produto">
                            <img src={product.image} alt="" /></div> 
                            <button className="add-carrinho"> Adicionar ao Carrinho <span><i className="bx bx-shopping-bag"></i></span></button>
                            <ul className="icons">
                                <span><i className="bx bx-heart"></i></span>
                               
                                <span><i className="bx bx-search"></i></span>
                            </ul>
                        <div className="rodape-produto">
                            <a href="#">
                                <h3> Relógio Quartz Masculino</h3>    
                            </a>

                            <div className="rating">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>

                            <h4 className="price">R$60</h4>    
                        </div> 
                    </div>
                    ))}  
                </div>
            </section>
        </div>
    )
}