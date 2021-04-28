import { React, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function OrderConfirmed() {
    let history = useHistory();
    const [counter, setCounter] = useState(10);

    // counter -1 laskuri
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            history.push('/');
        }
    }, [counter]);

    return (
        <div className="row d-flex justify-content-center m-2">
            <div className="col-auto text-center bookDetailsBg m-3 p-3 p-md-5">
                <h2>Kiitos tilauksestasi!</h2>
                <p>Siirryt automaattisesti takaisin etusivulle {counter} sekunnin kuluttua..</p>
                <Link to="/" onClick={() => setCounter(0)}>Tai klikkaa tästä siirtyäksesi heti.</Link>
            </div>
        </div>
    )
}