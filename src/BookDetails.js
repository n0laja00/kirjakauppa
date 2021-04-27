import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AddToCart from './cartComponents/AddToCart';
import CartContextProvider from './contexts/CartContext';
import Loading from './Loading';
import Rating from './Rating';

export default function BookDetails() {

    const params = useParams();
    const id = params.id;

    const [book, setBook] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const URL = 'http://localhost/kirjakauppa/haeKirjaNro.php/'
    const imgURL = 'http://localhost/kirjakauppa/img/';

    useEffect(() => {
        fetch(URL + id)
            .then(response => response.json())
            .then(
                (result) => {
                    setBook(result);
                    setIsLoaded(true);
                }, (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            )
    }, [id])

    if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <>
                {book.map(el => (
                    <div className="row " key={el.kirjaNro}>
                        <h1 className="col-12 my-4 ">{el.kirjaNimi}</h1>
                        <div className="col-md-6">
                            <img className="mb-3 img-fluid bookDetailsBorder" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                        </div>
                        <div className="col-md-6">
                            <div className="col-12 bookDetailsBg p-4 ">
                                <h3 className="col">Kuvaus</h3>
                                <div className="col">{el.kuvaus}</div>
                                <div className="col">{el.keskiarvo}</div>
                                <div className="mt-4 col-12 text-center"> <h4><b>{el.hinta} €</b></h4></div>
                                <div className="text-center">
                                    <CartContextProvider>
                                        <AddToCart item={el} />
                                    </CartContextProvider>
                                </div>
                            </div>
                            <div className="bookDetailsBg p-4 my-3">
                                <h3 className="col-12">Kirjan tiedot</h3>
                                <div className="col-12">Kirjan nimi: {el.kirjaNimi}</div>
                                <div className="col-12">Kirjailija: {el.sukunimi}, {el.etunimi}</div>
                                <div className="col-12">Sivuja: {el.sivuNro} </div>
                                <div className="col-12">Julkaisuvuosi: {el.julkaistu} </div>
                                <div className="col-12">Julkaisija: {el.julkaisija} </div>
                                <div className="col-12 my-2">
                                    <Rating rated={el.arvosana} />
                                </div>
                                <div className="col-1"><Link to={'/Reviews/' + id}><h5>Arvostelut</h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
