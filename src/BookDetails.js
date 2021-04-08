import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';

export default function BookDetails() {

    const params = useParams();
    const id = params.id;

    const [book, setBook] = useState([]);
    const [error, setError] = useState('');
    const URL = 'http://localhost/kirjakauppa/haeKirjaNro.php/'
    const imgURL = 'http://localhost/kirjakauppa/img/';


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
        <>
            {book.map(el => (
                <div className="row">
                    <div className="row">
                        <h1 className="col-sm-12">{el.kirjaNimi}</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img class="card-img-top" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                        </div>
                        <div className="col-sm-6">
                            <div className="row customBorder bottomBg p-3">
                                <h3 className="col-sm-12">Kirja</h3>
                                <div className="col-sm-12">{el.kuvaus}</div>
                                <div className="mt-4 col-sm-6">Hinta: {el.hinta} €</div>
                                <button className="btn btn-primary m-3 col-8">Ostoskoriin</button>
                            </div>
                            <div className="row customBorder bottomBg p-3 my-3">
                                <h3 className="col-12">Kirjan tiedot</h3>
                                <div className="col-12">Kirjan nimi: {el.kirjaNimi}</div>
                                <div className="col-12">Kirjailija: {el.sukunimi}, {el.etunimi}</div>
                                <div className="col-12">Sivuja: {el.sivuNro} </div>
                                <div className="col-12">Julkaisuvuosi: {el.julkaistu} </div>
                                <div className="col-12">Julkaisija: {el.julkaisija} </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}
