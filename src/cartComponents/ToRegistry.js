import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext.js';
import Registry from '../registryComponents/Registry.js';

const ToRegistry = (prop) => {
    let { cart } = useContext(CartContext);
    let cartLength = cart.length;
    const [cartState, setCartState] = useState(false);
    let kassa = prop.kassa
    

    useEffect(() => {
        if(cartLength <= 0) {setCartState(true);}
        else{setCartState(false)};
        console.log(cartLength);
    },[])

    return ( 
        
        <div className="col-12 mb-5 mt-3">
            <div className={"" + `div ${cartState ? "hidden" : ""}` + `div ${kassa ? "hidden" : ""}`}>
                <Link className="link varjo btn1 float-end" to="/registryComponents/Registry">
                    Kassalle
                </Link>
            </div>
        </div>
        
        
   );
}

export default ToRegistry;