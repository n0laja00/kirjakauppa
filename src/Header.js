import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="row header">
            <div className="row">
                <div className="col-sm-1">Logo?</div>
                <div className="col-sm-10">
                    <h1 className="text-center">Satun Satumaailma</h1>
                </div>
                <div className="shopcart_cs col-sm-1">Shopping cart
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
