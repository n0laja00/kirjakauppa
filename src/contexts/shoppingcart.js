import React, {createContext,useReducer, useEffect} from 'react';
import { cartReducer } from '../reducers/cartReducer';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer,[],() => {
        
    })
    return ( 

     );
}
 
export default CartContextProvider;