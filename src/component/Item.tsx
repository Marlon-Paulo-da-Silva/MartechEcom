import { CartItemType } from "../App";
import products from "../Data/data";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) =>{
    
    return(
        <div>
                  <div className="container">
                       <div className="card">
                           <img className="card_img" src={item.image} alt="product" />

                           <div className="card_data">
                               <h1 className="card_title">
                                   {item.name}
                               </h1>
                               <span className="card_price">{item.price}</span>
                               <p className="card_description">Lorem ipsum dolor consectetur adipisicing elit. Tenet</p>
                               
                               <a href="#" className="card_button" onClick={() => {  }}>Adicionar ao Carrinho</a>
                           </div>
                        </div>
                </div>
        </div>
    );
}