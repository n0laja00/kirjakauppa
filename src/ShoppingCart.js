import React from 'react'

export default function ShoppingCart() {
    return (
        <div className="row mt-3 py-4 d-flex justify-content-center">
            <h3>Ostoskori</h3>
            <div className="col-3">
                <input className="form-control mt-2" type="text" placeholder="account/email"></input>
                <input className="form-control mt-2" type="password" placeholder="password"></input>
            <button className="loginButton mt-3 px-5">Login</button>
        </div>
        </div>
    )
}
