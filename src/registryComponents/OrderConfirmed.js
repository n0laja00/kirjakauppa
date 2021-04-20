import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderConfirmed() {

    setTimeout(function () {
        window.location.replace('/');
    }, 10000);

    return (
        <div className="col-12 text-center">
            <h2>Tilaus vahvistettu.</h2>
            <p>Siirryt automaattisesti takaisin etusivulle 10 sekunnin kuluttua.</p>
            <Link to="/">Tai klikkaa tästä jatkaaksesi heti</Link>
        </div>
    )
}
