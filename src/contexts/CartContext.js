import React, {createContext,useReducer, useEffect} from 'react';
import { cartReducer } from '../reducers/cartReducer';
import uuid from 'react-uuid';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    
    /*const [cart, dispatch] = useReducer(cartReducer,[],() => {
        const localData = localStorage.getItem('cart');
         return localData ? JSON.parse(localData): []
    });*/
    const [cart, dispatch] = useReducer(cartReducer,[{kirjaNro:1, id:uuid()}]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    }, [cart]);

    return ( 
        <CartContext.Provider value = {{cart, dispatch}}>
            {props.childen}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;