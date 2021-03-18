import React from 'react'

export default function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Etusivu <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Kategoriat</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Kirjaudu</a>
                        </li>
                    </ul>
                </div>
            </nav>
       
    )
}
