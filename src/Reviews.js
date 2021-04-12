import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';

export default function Reviews() {

    const URL = 'http://localhost/kirjakauppa/';
    const params = useParams();
    const id = params.id;


    const [submit, setSubmit] = useState(false);
    const [review, setReview] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('')
    const [error, setError] = useState('');

    function updateReview() {
        setSubmit(!submit);
    }

    useEffect(() => {
        let status = 0;
        fetch(URL + 'haeArvostelu.php/' + id)
            .then(res =>
                {
                    status = parseInt(res.status);
                    return res.json();
                })
                .then(
                    (res) => {
                        if (status===200) {
                            setReview(res);
                        }
                }, (error) => {
                    setError(error);
                    // setIsLoaded(false);
                }
            )
    }, [submit])

    function save(e) {
        e.preventDefault();
        fetch(URL + 'lisaaArvostelu.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                nimimerkki: name,
                otsikko: title,
                teksti: text,
                kirjaNro: id
            })
        })
        .then((res) => res.json(... review, res))
        .then ((result) => {
            console.log(result);
        })
    }

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
            <form onSubmit={save} method="POST">
                <div className="row">
                    <div className="row col mx-3 mt-5 p-4 bottomBg customBorder">
                        <div className="col-12">
                            <label for="reviewerName" className="form-label">Arvostelija</label>
                            <input type="text" className="form-control" id="reviewerName" name="reviewerName" placeholder="Nimi" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="col-12">
                            <label for="reviewTitle" className="form-label">Otsikko</label>
                            <input type="text" className="form-control" id="reviewTitle" name="reviewTitle" placeholder="Arvostelun otsikko" value={title} onChange={e => setTitle(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label for="reviewText" className="form-label">Arvostelu</label>
                            <textarea className="form-control" id="reviewText" name="reviewText" rows="3" placeholder="Kirjoita arvostelu tähän" value={text} onChange={e => setText(e.target.value)}></textarea>
                            <button className="btn btn-primary col-6 mt-4" onClick={updateReview}>Lähetä arvostelu</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
