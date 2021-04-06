import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'

export default function Navbar({setCategory}) {
    const [categories, setCategories] = useState([])

    useEffect(async() => {
        try {
            const response = await fetch('http://localhost/kirjakauppa/navKategoriat.php/');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
                setCategory= json[0];
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [])

    return (
        <div className="row m-0 p-0">

            <nav className="navbar navbar-expand-lg navbar-light col-sm">

            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse row" id="navbarNavDropdown">
                <div className="col-2 d-none d-lg-block"></div>
                <ul className="navbar-nav navbar col-1 col-sm-2 col-lg-8 pe-0">
                    <Link className="link mb-2 mb-lg-0" 
                        to={{
                                pathname: '/AllBooks',
                                state: {
                                    id: "22",
                                    name: "Kaikki kirjat"
                                }
                            }}>
                        <li className="nav-item border-xs-bottom border-lg-bottom-0 border-md-right border-lg-right-0">
                            <div className="text-center">
                                <i className="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
                            
                                <div>Kaikki kirjat</div>
                            </div>
                        </li>
                    </Link>

                    {categories.map(category =>(
                        <li key={category.kategoria} className="nav-item border-xs-bottom border-lg-bottom-0">
                            <Link 
                                className="link mb-2 mb-lg-0" 
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: category.kategoriaNro,
                                        name: category.kategoria
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-book fa-2x"></i>
                                    <div>{category.kategoria}</div>
                                </div>
                            </Link>
                        </li>
                    ))}

                    {/* <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-book fa-2x"></i>
                                <div>Tietokirjallisuus</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-exclamation fa-2x "></i>
                                <div>Toiminta</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-magic fa-2x"></i>
                                <div>Sci-fi ja Fantasia</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-mortar-board fa-2x"></i>
                                <div>Oppikirjat</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-user-secret fa-2x"></i>
                                <div>Kauhu ja Trilleri</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-heart fa-2x"></i>
                                <div>Romantiikka</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="link mb-2 mb-lg-0" to="/AllBooks">
                        <li className="nav-item border-xs-bottom border-lg-bottom-0">
                            <div className="text-center">
                                <i className="fa fa-map-pin fa-2x"></i>
                                <div>Lastenkirjat</div>
                            </div>
                        </li>
                    </Link> */}
                </ul>
            </div>
                <div className="d-block d-lg-none col justify-content-center">
                    <SearchBar />
                </div>
        </nav>
    </div>
    )
}
