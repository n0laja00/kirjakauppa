import React from 'react'
import Navbar from './Navbar'
import SearchBar from './Searchbar'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="row header py-3 shadow">
            <div className="row p-3">
                <div className="col-sm-1">Logo?</div>
                <div className="col-sm-10">
                    <h1 className="text-center">Satun Satumaailma</h1>
                </div>
                <div className="shopcart_cs col-sm-1 text-end">
                <Link className="cartlink" to="/ShoppingCart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link> 
                </div>
            </div>
            <Navbar />
            <SearchBar />
        </div>
    )
}
