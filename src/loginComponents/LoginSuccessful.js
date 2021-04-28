import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

export default function LoginSuccessful({user}) {
    
    if (user===null) {
        return <Redirect to="/LoginPage" />
    }

    function userName() {
        if (user.fname !== undefined)
        console.log(user.fname)
        return user.fname;
    }

    function muokkaus() {
        if (user.id === "1" && user.fname === "Admin" && user.lname === "käyttäjä") {
            return <div className="text-center mt-3">
            <Link to="/EditItemList" className="text-white">
                <i class="fa fa-genderless" aria-hidden="true"></i>
                Muokkaa tuotteita
            </Link>
        </div>;
        }
    }

    return (
        <>
            <div className="row d-flex justify-content-center" >
                <div className="col-md-6">
                    <div className="customLoginBorder p-4 my-3">
                        <h3 className="text-center text-white">Tervetuloa {userName()}</h3>
                        <div className="text-center mt-4">
                            <Link className="text-white" to={{pathname: '/AllBooks',
                                state: {id: "22", name: "Kaikki kirjat"}}}>
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                Tarkastele kirjoja
                            </Link>
                        </div>
                        {muokkaus()}
                        <div className="text-center mt-3">
                        
                            <Link to="/Logout" className="text-white">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                Kirjaudu ulos
                            </Link>
                        </div>
                        
                        <div className="col-12 my-2">
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}
