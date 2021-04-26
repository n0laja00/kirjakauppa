import React from 'react'
import {useState, useEffect, useContext} from 'react'

import { Link } from 'react-router-dom'

import { CartContext } from './contexts/CartContext';

export default function CartIcon() {
    let {cart} = useContext(CartContext);
    let [cartLength, setCartLength] = useState(0);
    useEffect(() => {
        if('cart' in localStorage){
            setCartLength(cart.length);
        }
    }, [cart]);

    return (
        <div>
            <Link className="link varjo" to="/ShoppingCart">
                <i className="fa fa-shopping-cart mx-1" aria-hidden="true">{cartLength}</i>
            </Link>
        </div>
    )
}
