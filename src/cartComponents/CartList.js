import React, {useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartDetails from './CartDetails';


/*sfc*/
const CartList = () => {
    const { cart } = useContext(CartContext);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        console.log(cart);
        const hinta = 0; 
        let cost = cart.map(a => a.hinta*a.maara);
        cost = cost.reduce((a,b) => a+b, 0)
        setTotalCost(cost);
        console.log(cost);
    }, [cart]);


    return cart.length ? ( 
        <div className = "cart-list">
            <h1 className="text-primary pb-5">Ostoskori</h1>
            <ul>
                { cart.map(item => {
                    return ( <CartDetails item={item} key={item.id} />) 
                })}
                
            </ul>
               
            <div className="col-12 text-end">
                total Cost: {totalCost}
            </div>
        </div>
     ) : (
         <div className="empty"> Ei kirjoja! </div>
     )
}
 
export default CartList;