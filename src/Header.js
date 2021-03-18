import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="row header">
            <div className="col-12">
            <h1 className="text-center">Satun Satumaailma</h1>  
            <div className="shopcart_cs">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            </div>
            <Navbar />
        </div>
    )
}
