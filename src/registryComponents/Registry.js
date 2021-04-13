import React from 'react'
import CartList from '../cartComponents/CartList'
import CartContextProvider from '../contexts/CartContext'

export default function Registry() {
    return (
        <div className="row">
            <h1 className="mt-2">Kassa</h1>

            <div className="col mt-3 ">
                <div className="col text-end">
                    <input type="text" className="col-5 float-start form-control-lg" name="firstName" placeholder="Etunimi" />
                    <input type="text" className="col-6 form-control-lg" name="lastName" placeholder="Sukunimi" />
                </div>
                <h2 className="col mt-4">Yhteystiedot:</h2>
                <div className="mt-3 col">
                    <input type="email" className="form-control form-control-lg" name="email" placeholder="Sähköposti" />
                </div>
                <div className="mt-3 col">
                    <input type="text" className="form-control form-control-lg" name="phone" placeholder="Puhelin (tarvitaan yhteydenpitoon)" />
                </div>
                <div className="mt-3 col">
                    <input type="text" className="form-control form-control-lg" name="corporation" placeholder="Yritys / yhteisö (valinnainen)" />
                </div>
                <div className="mt-3 col">
                    <input type="text" className="form-control form-control-lg" name="address" placeholder="Osoite" />
                </div>
                <div className="mt-3 col text-end">
                    <input type="text" className="col-5 float-start form-control-lg" name="postinumero" placeholder="Postinumero" />
                    <input type="text" className="col-6 form-control-lg" name="kaupunki" placeholder="Kaupunki"/>
                </div>
            </div>
            <div className="col">
                <div className="ms-5 h-25 w-75 d-inline-block float-end">
                    <CartContextProvider>
                        <CartList></CartList>
                    </CartContextProvider>
                </div>
            </div>
            
        </div>
        
        
    )
}
