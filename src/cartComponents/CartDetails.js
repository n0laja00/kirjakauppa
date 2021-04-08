import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartDetails = ({item}) /*item annetaan alas proppina*/ => {
    const {dispatch} = useContext(CartContext);
    useEffect(() => {
        console.log(item +" terve Terve CartDetailsistä");
    }, []);

    
    return ( 
        <li onClick={() => dispatch({type: 'REMOVE_FROM_CART', id: item.id})}>
            <div className="kirjaNro">{ item.kirjaNro }</div> 
        </li>
     );
}
 
export default CartDetails;