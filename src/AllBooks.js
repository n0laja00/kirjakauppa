import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';
import AddToCart from './cartComponents/AddToCart';
import CartContextProvider from './contexts/CartContext';
import Loading from './Loading';


export default function AllBooks({ category, user }) {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const URL1 = 'http://localhost/kirjakauppa/yksiKategoria.php/';
    const URL2 = 'http://localhost/kirjakauppa/kaikkiKirjat.php/';
    const URL3 = 'http://localhost/kirjakauppa/haku.php/';
    const imgURL = 'http://localhost/kirjakauppa/img/';
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');

    function title() {
        if (query !== null) {
            let otsikko = "Hakutulokset: " + query;
            return otsikko;
        } else if (category?.name === undefined) {
            let otsikko = "Kaikki kirjat";
            return otsikko;
        } else {
            let otsikko = category?.name;
            return otsikko;
        }
    }

    function muokkaus() {
        if (user === null) {
            return;
        }
        if (user.id === "1" && user.fname === "Admin" && user.lname === "käyttäjä") {
            return <Link className="link" to="/EditItemList">Lisää kirja</Link>;
        }
    }

    useEffect(() => {
        let address = URL1 + category?.id;
        if (query !== null) {
            address = URL3 + query;
        } else if (category?.id === "22") {
            address = URL2;
        } else if (category?.id == undefined) {
            address = URL2;
        };
        fetch(address)
            .then(response => response.json())
            .then(
                (result) => {
                    setBooks(result);
                    setIsLoaded(true);
                }, (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            )
    }, [category, query])

    if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <>
                <div className="col-12 text-center py-4">
                    <h1>{title()}</h1>
                    {muokkaus()}
                </div>
                <div className="row justify-content-center text-center">
                    {books.map(book => (
                        <div className="row card col-6 col-10 col-md-5 col-lg-4 col-xl-3 m-2 cardHover"
                            key={book.kirjaNimi}>
                            {/* kuvaa klikkaamalla pääsee kirjan sivulle */}
                            <div className="col-12 d-flex justify-content-center py-2">
                                <Link to={'/BookDetails/' + book.kirjaNro}>
                                    <img className="col-auto shadow card-img-top"
                                        src={imgURL + book.kuva}
                                        alt={book.kirjaNimi}>
                                    </img>
                                </Link>
                            </div>
                            <div className="row-auto">
                                <h5 className="card-title cut-text col-12">{book.kirjaNimi}</h5>
                                <div className="card-text cut-text col-sm-12">{book.kuvaus}</div>
                                <h5 className="card-subtitle text-center col-md-12 text-end p-3">
                                    <b>{book.hinta} €</b>
                                </h5>
                                <Link to={'/BookDetails/' + book.kirjaNro} className="link text-center">
                                    <div className="my-3 btn readMoreBtn col-8" name={book.kirjaNimi}>Lue lisää</div>
                                </Link>
                                <CartContextProvider>
                                    <AddToCart item={book} />
                                </CartContextProvider>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
