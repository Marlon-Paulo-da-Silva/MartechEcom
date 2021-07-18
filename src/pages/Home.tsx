import { useEffect, useState} from "react";
import {useQuery} from 'react-query';

import {useAuth} from "../contexts/authContext";

import { Item } from "../Component/Item";
import Cart from "../Component/Cart";




import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import '../styles/home.scss';
import '../styles/cartbutton.scss';
import { useCart } from "../contexts/cartContext";


export type CartItemType = {
  _id: number;
  name: string;
  image: string;
  price: number;
  numReviews: number;
  amount: number;
  totalproduct: number;
}



//integrar com a API
const getProducts = async(): Promise<CartItemType[]> =>
  await(await fetch("https://raw.githubusercontent.com/Marlon-Paulo-da-Silva/MartechEcom/main/src/Data/data.json")).json();

type Products = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

export function Home() {
    const {signed, signOut, user} = useAuth();


    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const [cartItemsWithContext, setCartItemsWithContext] = useState([] as CartItemType[]);


    const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
    

    const {orderPrice, orderProducts, userOrder, cartBuybutton, initiateBuy} = useCart();


    useEffect(() => {
        window.addEventListener('focus', () => {
            setCartItems(orderProducts => {
                return [...orderProducts];
            });

        });

        console.log('Olá, andressa, eu te amo ' );

        
    }, []);


    const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, items) => ack + items.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {

        
        
        setCartItems(orderProducts => {
            const isItemCart = orderProducts.find(item => item._id === clickedItem._id )
        
        
            if(isItemCart) {
                return orderProducts.map(item => (item._id === clickedItem._id ?
                    {...item, amount: item.amount + 1} : item))
            }
            setCartItemsWithContext([...orderProducts, {...clickedItem, amount: 1}]);
            console.log('contexto na Home dentro do addToCart', orderProducts);
            console.log('useState da Home dentro do addToCart', cartItemsWithContext);
            console.log('CartItens da Home dentro do addToCart', cartItems);

            return [...orderProducts, {...clickedItem, amount: 1}];
        });

        


    }

    const handleRemoveFromCart = (id: number) => (
        setCartItems(prev => (
            prev.reduce((ack, item) => {
                if(item._id === id){
                    if (item.amount === 1) return ack;
                    return [...ack, {...item, amount: item.amount - 1}];
                } else {
                    return [...ack, item];
                }
            }, [] as CartItemType[])
        ))
    );

    function handleSignOut(){
        signOut();
    }

    
    
    

    return ( 
        <div>
            
            {signed  ? <Link to="/signinlogin"><button className="login"> <i className='bx bxs-user-circle'></i> Minha Conta {user?.name}</button></Link>  : <Link to="/signinlogin"><button className="login"> <i className='bx bxs-user-circle'></i> Login</button></Link>}
            {signed  ? <Link to="/"><button className="login" onClick={handleSignOut}> <i className='bx bxs-user-circle'></i> Sair</button></Link>  : <Link to="/signinlogin"><button className="login"> <i className='bx bxs-user-circle'></i> Cadastrar</button></Link>}
            
            <section className="section destaque">
                <div className="titulo">
                    <h1>Produtos em Destaque</h1>
                </div>
                <div className="DrawerStyle">
                    <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                        
                        <Cart 
                            cartItems={cartItems} 
                            addToCart={handleAddToCart}
                            removeFromCart={handleRemoveFromCart}  />
                    </Drawer>
                </div>
                
                <div className="IconButtonStyle" onClick={() => setCartOpen(true)}>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error' />
                    <ShoppingCartIcon />
                </div>

                
                <div className="container">
                    {data?.map((item) => (
                       <Item item={item}  handleAddToCart={handleAddToCart}/>
                    ))}  
                </div>
                
            
            </section>
        </div>
    )
}