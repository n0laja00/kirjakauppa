import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext.js';
import Registry from '../registryComponents/Registry.js';

const ToRegistry = () => {
    let { cart } = useContext(CartContext);
    let cartLength = cart.length;
    const [cartState, setCartState] = useState(false);
    

    useEffect(() => {
        if(cartLength <= 0) {setCartState(true);}
        else{setCartState(false)};
        console.log(cartLength);
    },[])

    return ( 
        
        <div className="col-12 mb-5 mt-3">
            <div className={"" + `section ${cartState ? "hidden" : ""}`}>
                <Link className="link varjo" to="/registryComponents/Registry">
                        <a className="btn1 float-end">Kassalle</a>
                </Link>
            </div>
        </div>
        
        
   );
}

export default ToRegistry;