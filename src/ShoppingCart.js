import React from 'react'
import CartList from './cartComponents/CartList'
import TestAddItem from './cartComponents/TestAddItem'
import ToRegistry from './cartComponents/ToRegistry'
import CartContextProvider from './contexts/CartContext'



const ShoppingCart = () => {
    return ( 
        
        <div className="row mt-3 py-4 d-flex justify-content-center cart-page">
            <div>
                <CartContextProvider>
                    <CartList/> 
                </CartContextProvider>
                <ToRegistry/>
            </div>
        </div> 
        
   );
}
 
export default ShoppingCart;