import { React, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function OrderConfirmed() {
    let history = useHistory();
    const [timer, setTimer] = useState(5000);



    function stopTimeout() {
        const time = setTimeout(() => console.log('stopped'), 0)
        clearTimeout(time);
    }

    setTimeout(function () {
        console.log('started');
        history.push('/');
    }, timer);


    return (
        <div className="col-12 text-center">
            <h2 className="my-3">Kiitos tilauksesta!</h2>
            <p>Siirryt automaattisesti takaisin etusivulle 10 sekunnin kuluttua.</p>
            <Link to="/" onClick={stopTimeout}>Klikkaa tästä siirtyäksesi heti.</Link>
        </div>
    )
}
