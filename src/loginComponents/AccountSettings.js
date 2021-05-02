import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

export default function AccountSettings({user}) {

    let history = useHistory();
    
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

    function remove(id) {
        let status = 0;
        fetch('http://localhost/kirjakauppa/deleteUser.php/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            id: id
        })
        })
        .then(res => {
        status = parseInt(res.status);
        return res.json();
        })
        .then(
        (res) => {
            if (status === 200) {
                alert('Tilisi on poistettu.');
                history.push('/Logout');
            } else {
            alert(res.error);
            }
        }, (error) => {
            alert(error);
        }
        )
    }


    function poisto() {
        if (user.id !== "1" || user.fname !== "Admin" || user.lname !== "käyttäjä") {
            return <div className="text-center mt-3">
                        <button onClick={() => remove(user.id)} className="loginButton mt-2 px-5 py-1">Poista tili</button>
                    </div>
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
                        {poisto()}
                        <div className="col-12 my-2">
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}
