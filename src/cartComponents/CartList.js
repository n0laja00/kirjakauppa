import React, {useContext, useEffect, useState } from 'react';
import CartContextProvider, { CartContext } from '../contexts/CartContext';
import CartDetails from './CartDetails';

import ToRegistry from './ToRegistry';

/*sfc*/
const CartList = (prop) => {
    const { cart } = useContext(CartContext);
    let kassa = prop.kassa;
    const [totalCost, setTotalCost] = useState(0);
    const {dispatch} = useContext(CartContext)
    const [kori, setKori] = useState([cart]);

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

    const handleAddition = (item, cartObject) => {
        const books = cart;
        const change = 1;
        const itemIndex = books.findIndex((book) => book.kirjaNro === item.kirjaNro);        
            cart[itemIndex].maara = cart[itemIndex].maara + change;
            localStorage.setItem('cart', JSON.stringify(books));
            setKori(cart[itemIndex].maara);
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
        <div className = "row cart-list">
            <h1 className="text-primary pb-5">Ostoskori</h1>
                <ul className="col-12">
                    { cart.map(item => {
                        return (<CartDetails item={item} key={item.id} handleDelete={handleDelete} handleAddition={handleAddition} kassa={kassa}/>) 
                        
                    })}
                </ul>
               
            <div className="col-12 text-end">
                <h5>Hinta: {totalCost} €</h5>
            </div>
            
            <ToRegistry kassa={kassa}/>
        </div>
     ) : (
         <div className="empty"> Ei kirjoja! </div>
     )
}
 
export default CartList;