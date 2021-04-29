import React from 'react'
import Navbar from './Navbar'
import SearchBar from './Searchbar'
import { Link } from 'react-router-dom'

export default function Header({user}) {


    function userName() {
        
        if (user !== null) {
            return user.fname;
        } else {
            let kirjaudu = "Kirjaudu";
            return kirjaudu;
        }
        
    }

    function listaus() {
        if (user === null) {
            return  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><Link className="link dropdown-item" to="/LoginPage">Kirjaudu sisään</Link></li>
                </ul>;
        } else {
            return  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><Link className="link dropdown-item" to="/loginComponents/AccountSettings">Tilin asetukset</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link className="link dropdown-item" to="/Logout">Kirjaudu ulos</Link></li>
                </ul>;
        }
        
    }

    return (
        <div className="row header py-3 shadow">
           
         
            <div className="row">
                <div className="col-4 col-lg-3 col-xl-2 d-flex align-items-center pe-0">
                    <Link to="/"><img className="" src={require('./img/logo.png').default} alt="logo"/></Link>
                </div>
                <div className="col-6 col-md-7 col-xl-8 d-flex align-items-center ps-1 me-3 me-sm-4 me-md-0">
                    <h2>Ruotsalainen kirjakauppa</h2>
                </div>
                <div className="ps-sm-4 ps-md-0 col-1 col-lg-2">
                    <div className="text-end row">
                        
                        <div className="shopcart_cs col-12">
                            
                            <Link className="link varjo" to="/ShoppingCart">
                                <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                            </Link>
                            
                        </div>
                        <div className="col-xl-3"></div>
                        <div className="dropdown userDisplayBorder py-1 col-xl-9">
                            <div className="">
                               <a className="loginLinkki  row" role="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-user-circle-o col-12 col-lg-1 pe-lg-4 text-center" aria-hidden="true"></i>
                                    <div className="col-12 col-lg-6 ps-lg-4 kayttaja">{userName()}</div>
                                </a>
                                    {listaus()}
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