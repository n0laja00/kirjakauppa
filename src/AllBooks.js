import { useState, useEffect, React } from 'react'


export default function AllBooks() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const URL = 'http://localhost/kirjakauppa/kaikkiKirjat.php';
    // const imgURL = 'http://localhost/projekti/img/'

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(
                (result) => {
                    setBooks(result);
                    console.log(result);
                    // setIsLoaded(true);
                    // setItems(result.articles);
                }, (error) => {
                    setError(error);
                    console.log(error);
                    console.log(books)
                    // setIsLoaded(true);
                    // setItems([]);
                }
            )
    }, [])


    return (
        <div className="row">
            <div className="col-12 text-center py-4">
                <h1>Kaikki kirjat</h1>
            </div>
            <div className="row d-flex justify-content-center">
                {books.map(book => (
                    <div className="col-5 bookDiv"><img src="{imgURL}+{book.kuva}" /* alt={book.kirjaNimi} */ className="img-fluid"></img>
                    {book.kirjaNimi}
                    <div>{book.kuvaus}</div>
                    <div>Sivumäärä: {book.sivuNro}</div>
                        <div>Julkaisupäivä: {book.julkaistu}</div>
                        <div><b>Hinta: {book.hinta}</b></div>
                    </div>

                ))}
            </div>
        </div>
    )
}
