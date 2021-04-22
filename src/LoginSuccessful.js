import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

export default function LoginSuccessful({user}) {
    const [isAdmin, setIsAdmin] = useState(false);


      if (user===null) {
        return <Redirect to="/LoginPage" />
    }
    function userName() {
        if (user.fname !== undefined)
        console.log(user.fname)
        return user.fname;
    }

    return (
        <>
            <div className="row d-flex justify-content-center" >
                <div className="col-md-6">
                    <div className="customBorder  p-4 my-3">
                        <h3 className="text-center text-white">Tervetuloa {userName()}</h3>
                        <div className="text-center mt-4">
                            <i class="fa fa-genderless text-white" aria-hidden="true"></i>
                            <Link className="text-white" to={{pathname: '/AllBooks',
                                state: {id: "22", name: "Kaikki kirjat"}}}>
                                Tarkastele kirjoja
                            </Link>
                        </div>
                        <div className="text-center mt-3">
                        <i class="fa fa-genderless text-white" aria-hidden="true"></i>
                            <Link to="/EditItemList" className="text-white">Muokkaa tuotteita</Link>
                        </div>
                        <div className="text-center mt-3">
                        <i class="fa fa-genderless text-white" aria-hidden="true"></i>
                            <Link to="/Logout" className="text-white">Kirjaudu ulos</Link>
                        </div>
                        
                        <div className="col-12 my-2">
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}
