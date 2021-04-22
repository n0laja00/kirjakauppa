import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';
import AddToCart from './cartComponents/AddToCart';
import CartContextProvider from './contexts/CartContext';


export default function AllBooks({ category }) {

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

    useEffect(() => {
        let address = URL1 + category?.id;
        if (query !== null) {
            address = URL3 + query;
        } else if (category?.id === "22") {
            address = URL2;
        } else if (category?.id === undefined) {
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
        return <div className="row justify-content-center pt-5">
            <div className="col-auto d-block">
                <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
            </div>
            <h2 className="col-auto d-block">Loading...</h2>
        </div>;
    } else {
        return (
            <div className="row">
                <div className="col-12 text-center py-4">
                    <h1>{title()}</h1>
                    <Link className="link" to="/EditItemList">Lisää kirja</Link>
                </div>
                <div className="row justify-content-center p-5 text-center">
                    {books.map(book => (
                        <div className="card col-sm-5 mx-2 my-3 cardHover" key={book.kirjaNimi}>
                            <img className="card-img-top p-4 bookBrowseImg" src={imgURL + book.kuva} alt={book.kirjaNimi}></img>
                            <div className="row">
                                <h5 className="card-title col-12">{book.kirjaNimi}</h5>
                                <div className="card-text cut-text col-sm-12">{book.kuvaus}</div>
                                <h5 className="card-subtitle col-md-12 text-end p-3">{book.hinta} €</h5>
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
            </div>
        )
    }
}
