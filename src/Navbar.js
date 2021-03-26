import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'

export default function Navbar() {
    return (

            <nav class="navbar navbar-expand-lg navbar-light">
            
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row" id="navbarNavDropdown">
                <ul class="navbar-nav navbar  col-1 col-sm-2 col-lg-12">
                        
                        <Link className="link" to="/">
                        <li class="nav-item"> 
                            <div className="text-center">
                                <i className="fa fa-book fa-2x"></i>
                                <div>Tietokirjallisuus</div>
                            </div>
                        </li>
                        </Link>
                        <Link className="link" to="/">
                        <li class="nav-item">
                            <div className="text-center">
                                <i className="fa fa-exclamation fa-2x "></i> 
                                <div>Toiminta</div>
                            </div>
                        </li>
                        </Link>
                        <Link className="link" to="/">
                        <li class="nav-item">
                            <div className="text-center">
                                <i className="fa fa-magic fa-2x"></i>
                                <div>Sci-fi ja Fantasia</div>
                            </div>
                        </li>
                        </Link>
                        <Link className="link" to="/">
                        <li class="nav-item">
                            <div className="text-center">
                                <i className="fa fa-mortar-board fa-2x"></i>
                                <div>Oppikirjat</div>
                            </div>
                        </li>
                        </Link>
                        <Link className="link" to="/">
                        <li class="nav-item">
                            <div className="text-center">
                                <i className="fa fa-user-secret fa-2x"></i>
                                <div>Kauhu ja Trilleri</div>
                            </div>
                        </li>
                        </Link>
                        <Link className="link" to="/">
                        <li class="nav-item">
                            <div className="text-center">
                                <i className="fa fa-heart fa-2x"></i>
                                <div>Romantiikka</div>
                            </div>
                        </li>
                        </Link>
                        <Link className="link" to="/">
                        <li class="nav-item">
                            <div className="text-center">
                                <i className="fa fa-map-pin fa-2x"></i>
                                <div>Lastenkirjat</div>
                            </div>
                        </li>
                        </Link>                   
                    </ul>
                </div>
            <div className="d-block d-sm-none">
            <SearchBar />
            </div>
            </nav>
            
    )
}
