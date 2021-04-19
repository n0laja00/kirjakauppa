import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AddToCart from './cartComponents/AddToCart';
import CartContextProvider from './contexts/CartContext';
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
        return <div className="row justify-content-center pt-5">
            <div className="col-auto d-block">
                <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
            </div>
            <h2 className="col-auto d-block">Loading...</h2>
        </div>;
    } else {
        return (
            <>
                {book.map(el => (
                    <div className="row" key={el.kirjaNro}>
                        <div className="row">
                            <h1 className="col-12 px-5 my-4">{el.kirjaNimi}</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="card-img-top customBorder mb-3 bookBrowseImg" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                            </div>
                            <div className="col-sm-6">
                                <div className="col-12 customBorder bottomBg p-4">
                                    <h3 className="col-sm-12">Kuvaus</h3>
                                    <div className="col-sm-12">{el.kuvaus}</div>
                                    <div className="col-sm-12">{el.keskiarvo}</div>
                                    <div className="mt-4 col-12 text-center"> <h4>{el.hinta} €</h4></div>
                                    <div className="text-center">
                                        <CartContextProvider>
                                            <AddToCart item={el} />
                                        </CartContextProvider>
                                    </div>
                                </div>
                                <div className="customBorder bottomBg p-4 my-3">
                                    <h3 className="col-12">Kirjan tiedot</h3>
                                    <div className="col-12">Kirjan nimi: {el.kirjaNimi}</div>
                                    <div className="col-12">Kirjailija: {el.sukunimi}, {el.etunimi}</div>
                                    <div className="col-12">Sivuja: {el.sivuNro} </div>
                                    <div className="col-12">Julkaisuvuosi: {el.julkaistu} </div>
                                    <div className="col-12">Julkaisija: {el.julkaisija} </div>
                                    <div className="col-12 my-2">
                                        <Rating rated={el.arvosana} />
                                    </div>
                                    <Link to={'/Reviews/' + id}>Lue arvostelut</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
