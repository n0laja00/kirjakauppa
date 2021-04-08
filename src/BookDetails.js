import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';

export default function BookDetails() {

    const params = useParams();
    const id = params.id;

    const [book, setBook] = useState([]);
    const [error, setError] = useState('');
    const URL = 'http://localhost/kirjakauppa/haeKirjaNro.php/'

    useEffect(() => {
        fetch(URL + '/' + id)
            .then(response => response.json())
            .then(
                (result) => {
                    setBook(result);
                }, (error) => {
                    setError(error);
                }
            )
    }, [])

    return (
        <div className="row">
            {book.map(el => (
                <div className="col-12 text-center">
                <h1>{el.kirjaNimi}</h1>
                <div>{el.kuvaus}</div>
                <div>{el.hinta}</div>
                </div>
            ))}
        </div>
    )

}
