import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';
import AddToCart from './cartComponents/AddToCart';
import CartContextProvider from './contexts/CartContext';


export default function AllBooks({ category }) {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const URL1 = 'http://localhost/kirjakauppa/yksiKategoria.php/';
    const URL2 = 'http://localhost/kirjakauppa/kaikkiKirjat.php/';
    const imgURL = 'http://localhost/kirjakauppa/img/';

    function title () {
        if (category?.name === undefined) {
            let otsikko = "Kaikki kirjat";
            return otsikko;
        } else {
            let otsikko = category?.name;
            return otsikko;
        }
    }

    useEffect(() => {
        let address = URL1 + category?.id;
        if (category?.id === "22") {
            address = URL2;
        }
        if (category?.id === undefined) {
            address = URL2;
        }

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
    }, [category])

    if (!isLoaded) {
        alert(error)
        return <div className="row text-center pt-5"> <h2>Loading...</h2></div>;
    } else {
        return (
            <div className="row">
                <div className="col-12 text-center py-4">
                    <h1>{title()}</h1>
                    <Link className="link" to="/AddItem">Lisää kirja</Link>
                </div>
                <div className="row justify-content-center p-5 text-center">
                    {books.map(book => (
                        <div class="card col-sm-5 mx-2 my-3 cardHover" key={book.kirjaNimi}>
                            <img class="card-img-top p-4 bookBrowseImg" src={imgURL + book.kuva} alt={book.kirjaNimi}></img>
                            <div class="row">
                                <h5 class="card-title col-12">{book.kirjaNimi}</h5>
                                <div class="card-text cut-text col-sm-12">{book.kuvaus}</div>
                                <h5 class="card-subtitle col-md-12 text-end p-3">{book.hinta} €</h5>
                                <Link to={'/BookDetails/'+ book.kirjaNro} className="link text-center">
                                    <div class="my-3 btn addToCartBtn col-8" name={book.kirjaNimi}>Lue lisää</div>
                                </Link>
                                <CartContextProvider>
                                    <AddToCart item={book}/>
                                </CartContextProvider>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
