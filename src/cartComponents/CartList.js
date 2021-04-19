import React, {useContext, useEffect, useState } from 'react';
import CartContextProvider, { CartContext } from '../contexts/CartContext';
import CartDetails from './CartDetails';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'
import Registry from '../registryComponents/Registry.js';
import ToRegistry from './ToRegistry';

/*sfc*/
const CartList = () => {
    const { cart } = useContext(CartContext);
    const [totalCost, setTotalCost] = useState(0);
    const {dispatch} = useContext(CartContext)
    const [kori, setKori] = useState([cart]);
    console.log("tämä on kori:")
    console.log(kori);

    const handleDelete = (item, cartObject) => {
        const books = cart;
        const change = 1;
        const itemIndex = books.findIndex((book) => book.kirjaNro === item.kirjaNro);

        if ( cart[itemIndex].maara > 1) {
            cart[itemIndex].maara = cart[itemIndex].maara - change;
            console.log(cart[itemIndex].maara);
            localStorage.setItem('cart', JSON.stringify(books));
            console.log("iso");
            setKori(cart[itemIndex].maara);

        } else {
            dispatch({type: 'REMOVE_FROM_CART', id: cartObject.id})
        }
        setKori([cart]);
    };

    useEffect(() => {
        console.log(cart);
        const hinta = 0; 
        let cost = cart.map(a => a.hinta*a.maara);
        cost = cost.reduce((a,b) => a+b, 0).toFixed(2);
        setTotalCost(cost);
        console.log(cost);
    }, [kori]);




    return cart.length ? ( 
        <div className = "cart-list">
            <h1 className="text-primary pb-5">Ostoskori</h1>
                <ul>
                    { cart.map(item => {
                        return (<CartDetails item={item} key={item.id} handleDelete={handleDelete} />) 
                        
                    })}
                </ul>
               
            <div className="col-12 text-end">
                <h5>Hinta: {totalCost} €</h5>
            </div>
            <ToRegistry/>
        </div>
     ) : (
         <div className="empty"> Ei kirjoja! </div>
     )
}
 
export default CartList;