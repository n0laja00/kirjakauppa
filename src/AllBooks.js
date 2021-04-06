import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';


export default function AllBooks({category}) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const URL1 = 'http://localhost/kirjakauppa/yksiKategoria.php/';
    const URL2 = 'http://localhost/kirjakauppa/kaikkiKirjat.php/';
    const imgURL = 'http://localhost/kirjakauppa/img/';

    useEffect(() => {
        if (category?.id === undefined) {
            return;
        }
        
        let address = URL1 + category?.id;
        if (category?.id === "22") {
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

/*     if (!isLoaded) {
        alert(error);
        return <div>Loading...</div>;
    } */

    return (
        <div className="row">
            <div className="col-12 text-center py-4">
                {books.map(title => (
                    <h1>{title.kategoria}</h1>
                ))}
            </div>
            <div className="row justify-content-center p-5">
                {books.map(book => (
                    <div class="card col-sm-5 mx-2 my-3 cardHover">
                        <img class="card-img-top p-4" src={imgURL + book.kuva} alt={book.kirjaNimi}></img>
                        <div class="row">
                            <h5 class="card-title col-12">{book.kirjaNimi}</h5>
                            <div class="card-text cut-text col-sm-12">{book.kuvaus}</div>
                            <h5 class="card-subtitle col-md-12 text-end p-3">{book.hinta} €</h5>
                            <Link className="link" to={'/BookDetails'} className="text-center">
                                <div class="my-3 btn addToCartBtn col-8" name={book.kirjaNimi}>Lue lisää</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
