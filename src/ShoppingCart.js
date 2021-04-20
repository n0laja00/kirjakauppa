import React, { useEffect, useState } from 'react'
import CartList from './cartComponents/CartList'
import TestAddItem from './cartComponents/TestAddItem'
import ToRegistry from './cartComponents/ToRegistry'
import CartContextProvider from './contexts/CartContext'



const ShoppingCart = () => {
    let localState = localStorage.getItem('cart').length;
    const [cartState, setCartState] = useState(false)
    

    useEffect(() => {
        if(localState >= 3) {setCartState(false);}
        else{setCartState(true)};
        localState = localStorage.getItem('cart').length;
    },[])

    return ( 
        
        <div className="row mt-3 py-4 d-flex justify-content-center cart-page">
            <div>
                <CartContextProvider>
                    <CartList/> 
                </CartContextProvider>
            </div>
        </div> 
        
   );
}
 
export default ShoppingCart;