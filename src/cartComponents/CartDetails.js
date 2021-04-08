import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartDetails = ({item}) /*item annetaan alas proppina*/ => {
    const {dispatch} = useContext(CartContext);
    return ( 
        <li>
            <div onClick={() => dispatch({type: 'Remove_ITEM', id: item.id})}>
                <p> dwadsa {item.id} Kirjan  tiedot tähän!</p>
            </div> 
        </li>
     );
}
 
export default CartDetails;