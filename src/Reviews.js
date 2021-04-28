import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import uuid from 'react-uuid';
import Loading from './Loading';
import Reviewsmap from './Reviewsmap';


export default function Reviews() {
    const URL = 'http://localhost/kirjakauppa/';
    const params = useParams();
    const id = params.id;

    const [submit, setSubmit] = useState(false);
    const [review, setReview] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let status = 0;
        fetch(URL + 'haeArvostelu.php/' + id)
            .then(res => {
                status = parseInt(res.status);
                return res.json();
            })
            .then(
                (res) => {
                    if (status === 200) {
                        setReview(res);
                        setIsLoaded(true);
                    }
                }, (error) => {
                    setError(error);
                }
            )
    }, [submit])

    function saveReview(e) {
        e.preventDefault();
        fetch(URL + 'lisaaArvostelu.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                nimimerkki: name,
                otsikko: title,
                teksti: text,
                kirjaNro: id,
                arvosana: rating
            })
        })
            .then((res) => {
                setSubmit(!submit);
                setName('');
                setTitle('');
                setText('');
                setRating(null)
            })
    }

    if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <>
                {/* arvostelujen map komponentti */}
                <Reviewsmap review={review} />
                <form onSubmit={saveReview} method="POST">
                    <div className="row  mx-3 mt-5 p-4 bottomBg customBorder">
                        <div className="col-sm-6">
                            <label htmlFor="reviewerName" className="form-label">Arvostelija</label>
                            <input type="text" className="form-control" id="reviewerName" name="reviewerName" placeholder="Nimi" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="reviewTitle" className="form-label">Otsikko</label>
                            <input type="text" className="form-control" id="reviewTitle" name="reviewTitle" placeholder="Arvostelun otsikko" value={title} onChange={e => setTitle(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reviewText" className="form-label  mt-2">Arvostelu</label>
                            <textarea className="form-control" id="reviewText" name="reviewText" rows="3" placeholder="Kirjoita arvostelu tähän" value={text} onChange={e => setText(e.target.value)}></textarea>
                            <div className="col-sm-6 mt-2">Montako tähteä antaisit kirjalle?</div>
                            <div className="col-sm-6 mt-2">
                                {/* tähtiarvostelu - source: https://www.youtube.com/watch?v=eDw46GYAIDQ */}
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <label key={uuid()}>
                                            <input className="hidden"
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            <i className="fa fa-star fa-2x"
                                                id={ratingValue <= (hover || rating) ? "starHover" : "starDefault"}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}>
                                            </i>
                                        </label>
                                    )
                                })}
                            </div>
                            <button className="btn btn-primary col-auto mt-3">Lähetä</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
