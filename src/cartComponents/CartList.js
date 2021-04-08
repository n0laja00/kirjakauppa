import React, {useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartDetails from './CartDetails';


/*sfc*/
const CartList = () => {
    const { cart } = useContext(CartContext);
    useEffect(() => {
        console.log(cart);

    }, []);


    return cart.length ? ( 
        <div className = "cart-list">
            <ul>
                { cart.map(item => {
                    return ( <CartDetails item={item} key={item.id} />)
                })}
            </ul>
            <div className="col-12 text-end">
                total Cost: 
            </div>
        </div>
     ) : (
         <div className="empty"> Ei kirjoja! </div>
     )
}
 
export default CartList;