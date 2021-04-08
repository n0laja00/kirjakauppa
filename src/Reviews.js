import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';

export default function Reviews() {

    const URL = 'http://localhost/kirjakauppa/haeArvostelu.php/';
    const params = useParams();
    const id = params.id;

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(URL + id)
            .then(response => response.json())
            .then(
                (result) => {
                    setReview(result);
                }, (error) => {
                    // setError(error);
                    // setIsLoaded(false);
                }
            )
    }, [id])

    console.log(review)

    return (
        <>
            <div className="row">
                <div className="col mx-3 mt-5 p-4 bottomBg customBorder">
                    <h3><u>Kirjan arvostelut</u></h3>
                    <div className="col mt-3">
                        {review.map(rev => (
                            <div key={rev.arvosteluNro}>
                                <h4 className="col">{rev.otsikko}</h4>
                                <div className="col">{rev.teksti}</div>
                                <div className="col text-end mt-3">Arvostelija: {rev.nimimerkki}</div>
                                <div className="col mb-3 text-end border-bottom border-primary"> {rev.luotu} </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row col mx-3 mt-5 p-4 bottomBg customBorder">
                    <div className="col-12">
                        <label for="reviewerName" className="form-label">Arvostelija</label>
                        <input type="text" className="form-control" id="reviewerName" name="reviewerName" placeholder="Nimi" required />
                    </div>
                    <div className="col-12">
                        <label for="reviewTitle" className="form-label">Otsikko</label>
                        <input type="text" className="form-control" id="reviewTitle" name="reviewTitle" placeholder="Arvostelun otsikko" required />
                    </div>
                    <div className="mb-3">
                        <label for="reviewTextArea" className="form-label">Arvostelu</label>
                        <textarea className="form-control" id="reviewTextArea" name="reviewTextArea" rows="3" placeholder="Kirjoita arvostelu tähän"></textarea>
                        <button className="btn btn-primary col-6 mt-4">Lähetä arvostelu</button>
                    </div>
                </div>
            </div>
        </>
    )
}
