import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';


export default function AllBooks() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const URL = 'http://localhost/kirjakauppa/kaikkiKirjat.php';
    const imgURL = 'http://localhost/kirjakauppa/img/';

    useEffect(() => {
        fetch(URL)
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
    }, [])

    if (!isLoaded) {
        alert(error);
        return <div>Loading...</div>;
    }

    return (
        <div className="row">
            <div className="col-12 text-center py-4">
                <h1>Kaikki kirjat</h1>
            </div>
            <div className="row d-flex justify-content-center">
                {books.map(book => (
                    <div class="card col-5 mx-2 my-3 cardHover">
                        <img class="card-img-top p-4" src={imgURL + book.kuva} alt={book.kirjaNimi}></img>
                        <div class="row">
                            <h5 class="card-title col-12">{book.kirjaNimi}</h5>
                            <div class="card-text cut-text col-sm-12">{book.kuvaus}</div>
                            <h5 class="card-subtitle col-md-12 text-end p-3">{book.hinta} €</h5>
                            <Link className="link" to={'/'}>
                                <div class="my-3 btn addToCartBtn col-8" name={book.kirjaNimi}>Lue lisää</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
