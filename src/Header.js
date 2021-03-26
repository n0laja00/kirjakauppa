import React from 'react'
import Navbar from './Navbar'
import SearchBar from './Searchbar'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="row header py-3 shadow">
            <div className="row">
                <div className="col-8">
                    <h2>Ruotsalainen kirjakauppa :D</h2>
                </div>
                <div className="col-4">
                    <div className="col-12 text-end"><Link className="link" to="/">Home</Link>
                    </div>
                    {/* tämän col-4:n sisässä ostoskori ja Login */}
                    <div className="col-12 text-end">
                        <div className="shopcart_cs col-12">
                            <Link className="link varjo" to="/ShoppingCart">
                                <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                            </Link>
                            <div className="col-12">
                                <Link className="link col-12" to="/LoginPage">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
            <div className="d-none d-sm-block">
                <SearchBar />
            </div>
        </div>
    )
}
//  <div className="col-12 text-end">ASD</div>
//                     <div className="col-12 text-end">ASD</div>