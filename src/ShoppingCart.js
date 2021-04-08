import React from 'react'
import CartList from './cartComponents/CartList'
import TestAddItem from './cartComponents/TestAddItem'
import CartContextProvider from './contexts/CartContext'



const ShoppingCart = () => {
    return ( 
        <div className="row mt-3 py-4 d-flex justify-content-center">
            <div>
                <h3 className="text-primary">Ostoskori</h3>
                <CartContextProvider>
                    <CartList/> 
                    <TestAddItem/>
                </CartContextProvider>
                
            </div>
        </div> 
   );
}
 
export default ShoppingCart;