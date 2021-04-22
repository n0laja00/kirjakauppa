import { React } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'

export default function Navbar() {
    // {setCategory}
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     (async() => {
    //     try {
    //         const response = await fetch('http://localhost/kirjakauppa/navKategoriat.php/');
    //         const json = await response.json();
    //         if (response.ok) {
    //             setCategories(json);
    //             setCategory = json[0];
    //         } else {
    //             alert(json.error);
    //         }
    //     } catch (error) {
    //         alert(error);
    //     }}) ()
    // }, [])

    return (
            <nav className="d-flex align-items-end navbar navbar-expand-lg navbar-light">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler col-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* tyhjä col-1, että navigoinnin ikonit pysyy keskellä */}
                <div className="col-1"></div>
                <div className="mx-auto collapse navbar-collapse row" id="navbarNavDropdown">
                    <ul className="navbar-nav navbar col-1 col-sm-2 col-lg-12 ">
                        <li key={"Kaikki kirjat"} className="nav-item border-xs-bottom border-lg-bottom-0 border-md-right border-lg-right-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "22",
                                        name: "Kaikki kirjat"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-address-book-o fa-2x" aria-hidden="true"></i>

                                    <div>Kaikki kirjat</div>
                                </div>
                            </Link>
                        </li>

                        {/* {categories.map(category =>(
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
                    ))} */}

                        <li key={"Tietokirjallisuus"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "1",
                                        name: "Tietokirjallisuus"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-book fa-2x"></i>
                                    <div>Tietokirjallisuus</div>
                                </div>
                            </Link>
                        </li>

                        <li key={"Toiminta"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "2",
                                        name: "Toiminta"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-exclamation fa-2x "></i>
                                    <div>Toiminta</div>
                                </div>
                            </Link>
                        </li>

                        <li key={"Sci-fi ja Fantasia"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "3",
                                        name: "Sci-fi ja Fantasia"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-magic fa-2x"></i>
                                    <div>Sci-fi ja Fantasia</div>
                                </div>
                            </Link>
                        </li>

                        <li key={"Oppikirjat"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "4",
                                        name: "Oppikirjat"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-mortar-board fa-2x"></i>
                                    <div>Oppikirjat</div>
                                </div>
                            </Link>
                        </li>

                        <li key={"Kauhu ja Trilleri"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "5",
                                        name: "Kauhu ja Trilleri"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-user-secret fa-2x"></i>
                                    <div>Kauhu ja Trilleri</div>
                                </div>
                            </Link>
                        </li>

                        <li key={"Romantiikka"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "6",
                                        name: "Romantiikka"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-heart fa-2x"></i>
                                    <div>Romantiikka</div>
                                </div>
                            </Link>
                        </li>

                        <li key={"Lastenkirjat"} className="nav-item border-xs-bottom border-lg-bottom-0 mb-2 mb-lg-0">
                            <Link className="link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: "7",
                                        name: "Lastenkirjat"
                                    }
                                }}>

                                <div className="text-center">
                                    <i className="fa fa-map-pin fa-2x"></i>
                                    <div>Lastenkirjat</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* tyhjä col-1, että navigoinnin ikonit pysyy keskellä */}
                <div className="d-none d-lg-block col-1"></div>
                <div className="d-block d-lg-none col justify-content-center">
                    <SearchBar />
                </div>
            </nav>
    )
}
