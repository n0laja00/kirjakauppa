import React from 'react'

export default function LoginPage() {
    return (
        <div className="row py-4 d-flex justify-content-center">
            <div className="col-3">
                <input className="form-control mt-2" type="text" placeholder="account/email"></input>
                <input className="form-control mt-2" type="password" placeholder="password"></input>
            <button className="loginButton mt-2 px-5">Login</button>
        </div>
        </div>
        
    )
}
