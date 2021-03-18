import React from 'react'

export default function Navbar() {
    return (

            <nav class="navbar navbar-expand-lg navbar-light">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row" id="navbarNavDropdown">
                    <ul class="navbar-nav align-middle align-items-center">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Etusivu <span class="sr-only">(current)</span></a>
                        </li>
                        <div className="col navbar">
                            <li class="nav-item">
                                <i className="fa fa-book fa-2x"></i>
                                <div className="col-12">Tietokirjallisuus</div>
                            </li>
                            <li class="nav-item">
                                <i className="fa fa-exclamation fa-2x "></i> 
                                <div className="col-12">Toiminta</div>
                            </li>
                            <li class="nav-item">
                                <i className="fa fa-magic fa-2x"></i>
                                <div className="col-12">Sci-fi ja Fantasia</div>
                            </li>
                            <li class="nav-item">
                                <i className="fa fa-mortar-board fa-2x"></i>
                                <div className="col-12">Oppikirjat</div>
                            </li>
                            <li class="nav-item">
                                <i className="fa fa-user-secret fa-2x"></i>
                                <div className="col-12">Kauhu ja Trilleri</div>
                            </li>
                            <li class="nav-item">
                                <i className="fa fa-heart fa-2x"></i>
                                <div className="col-12">Romantiikka</div>
                            </li>
                            <li class="nav-item">
                                <i className="fa fa-map-pin fa-2x"></i>
                                <div className="col-12">Lastenkirjat</div>
                            </li>
                        </div>
                        <div className="col-2 text-end">
                        
                                <a className="nav-link" href="#">Kirjaudu</a>
                        
                        </div>
                    </ul>
                </div>
            </nav>
       
    )
}
