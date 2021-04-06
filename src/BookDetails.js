import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';



export default function AllBooks({key}) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const URL2 = 'http://localhost/kirjakauppa/kaikkiKirjat.php/';
    const imgURL = 'http://localhost/kirjakauppa/img/';

    useEffect(() => {
        fetch(URL2)
            .then(response => response.json())
            .then(
                (result) => {
                    setBooks(result);
                }, (error) => {
                    setError(error);
                }
            )
    },[])

    return (
            <div className="row justify-content-center p-5">
                {books.map(book => (
                    <div class="card col-sm-5 mx-2 my-3 cardHover" key={book.kirjaNimi}>
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
    )
}