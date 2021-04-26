import React, {useState, useEffect, useContext} from 'react'
import Navbar from './Navbar'
import SearchBar from './Searchbar'
import { Link } from 'react-router-dom'

import CartContextProvider, { CartContext } from './contexts/CartContext';
import CartIcon from './CartIcon';

export default function Header() {

    const {cart} = useContext(CartContext)
    const [kori, setKori] = useState([cart]);
    const [quantity, setQuantity] = useState('');
    useEffect(() => {
        setQuantity(cart.length)
    },[cart])




    
    
    return (
        <div className="row header py-3 shadow">
           
         
            <div className="row">
                <div className="col-4 col-lg-3 col-xl-2">
                    <Link to="/"><img src={require('./img/logo.png').default} alt="logo"/></Link>
                </div>
                <div className="col-7 col-xl-8 d-flex align-items-center">
                    <h2>Ruotsalainen kirjakauppa</h2>
                </div>
                <div className="col-1 col-lg-2">
                    <div className="text-end">
                        
                        <div className="shopcart_cs">
                            <CartIcon/>
                            <div>
                                <Link className="link" to="/LoginPage">Login</Link>
                            </div>
                            <div>
                                <Link className="link" to="/Logout">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="p-0 col-12 col-sm-3 col-lg-12">
                <Navbar />
            </div>
            
            <div className="col-12 col-md-9 col-lg-12">
                <SearchBar />
            </div> */}

            <Navbar />
            <div className="d-none d-lg-block">
                <SearchBar />
            </div>
        </div>
        
    )
}