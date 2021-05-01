import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

export default function AccountSettings({user}) {
    
    if (user===null) {
        return <Redirect to="/LoginPage" />
    }

    function userName() {
        if (user.fname !== undefined)
        return user.fname + " " + user.lname;
    }

    function muokkaus() {
        if (user.id === "1" && user.fname === "Admin" && user.lname === "käyttäjä") {
            return <>
                <div className="text-center mt-3">
                    <Link className="text-white" to={{pathname: '/AllBooks',
                        state: {id: "22", name: "Kaikki kirjat"}}}>
                        <i class="fa fa-genderless" aria-hidden="true"></i>
                        Tarkastele kirjoja
                    </Link>
                </div>
                <div className="text-center mt-3">
                    <Link to="/EditItemList" className="text-white">
                        <i class="fa fa-genderless" aria-hidden="true"></i>
                        Muokkaa tuotteita
                    </Link>
                </div>
                <div className="text-center mt-3">             
                    <Link to="../AdminTools/OrderView" className="text-white">
                        <i class="fa fa-genderless" aria-hidden="true"></i>
                        Tarkastele tilauksia
                    </Link>
                </div>
            </>;
        }
    }

    function formi() {
        if (user.id !== "1" || user.fname !== "Admin" || user.lname !== "käyttäjä") {
        return <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="customLoginBorder p-4 my-3">
                    <div className="row d-flex justify-content-center">
                    <form >
                        <h3 className="text-center text-white">Muokkaa tiliä</h3>
                        <div className="mb-3">
                        <label  className="form-label">Etunimi</label>
                        <input type="text" className="form-control" id="fname"/>
                        </div>
                        <div className="mb-3">
                        <label  className="form-label">Sukunimi</label>
                        <input type="text" className="form-control" id="lname"/>
                        </div>
                        <div className="mb-3">
                        <label  className="form-label">Sähköposti</label>
                        <input type="email" className="form-control" id="email2"/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Salasana</label>
                        <input type="password" className="form-control" id="password2"/>
                        </div>
                        <button type="submit" className="loginButton mt-2 mb-2 px-4 py-1">Tallenna muutokset</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>;
            }
    }
    

    return (
        <>
            <div className="row d-flex justify-content-center" >
                <div className="col-md-8 col-lg-6">
                    <div className="customLoginBorder p-4 my-3">
                        <h3 className="text-center text-white">{userName()}</h3>
                        <div className="text-center mt-4">
                            <Link class="text-white" to="/">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                Takaisin Kirjakauppaan
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

            {formi()}
        </>    
    )
}
