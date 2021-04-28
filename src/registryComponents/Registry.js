import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import CartList from '../cartComponents/CartList'
import CartContextProvider from '../contexts/CartContext'
import LoadingButton from '../LoadingButton';
import OrderConfirmed from './OrderConfirmed';


export default function Registry() {
    let kassa = true;
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastTName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [corporation, setCorporation] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const [paymentMethod, setPaymentMethod] = useState('lasku');
    const [shippingAddress, setShippingAddress] = useState(address);
    const [shippingMethod, setShippingMethod] = useState('lk');
    const [shippingPostalCode, setShippingPostalCode] = useState('');
    const [shippingCity, setShippingCity] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const URL = 'http://localhost/kirjakauppa/';
        let status = 0;
        fetch(URL + 'asetaTilaus.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                asEtunimi: firstName,
                asSukunimi: lastName,
                email: email,
                puhNro: phone,
                yritys: corporation,
                lahiosoite: address,
                postitmp: city,
                postiNro: postalCode,
                ostoskori: cart,
                maksutapa: paymentMethod,
                toimitusosoite: shippingAddress,
                toimitustapa: shippingMethod,
                toimituspostitmp: shippingCity,
                toimituspostinro: shippingPostalCode
            })
        })
            .then(res => {
                status = parseInt(res.status);
                return res.json();
            })
            .then((res) => {
                if (status === 200) {
                    history.push('/OrderConfirmed');
                } else {
                    alert(res.error);
                }
            }, (error) => {
                alert(error)
            })
        setFirstName('');
        setLastTName('');
        setEmail('');
        setPhone('');
        setCorporation('');
        setAddress('');
        setPostalCode('');
        setCity('');
        setPaymentMethod('');
        setShippingAddress('');
        setShippingMethod('');
        setShippingPostalCode('');
        setShippingCity('');
        localStorage.setItem('cart', JSON.stringify([]));
        setIsConfirmed(true);
    };
    
        return (
            <div className="row registry_page">
                <h1 className="text-primary col mt-2">Kassa</h1>
                <div className="row">
                    <form className="col-sm-12 col-md-12 col-lg-4" onSubmit={handleSubmit}>
                        <div className="col mt-3 ">
                            <div className="row">
                                <label className="float-start col">Etunimi
                                <input type="text" value={firstName} maxlength="20" required className="form-control form-control-lg" name="firstName" placeholder="Etunimi" onChange={e => setFirstName(e.target.value)} />
                                </label>
                                <label className="float-end col"> Sukunimi
                                <input type="text" value={lastName} maxlength="20" required className="form-control form-control-lg" name="lastName" placeholder="Sukunimi" onChange={e => setLastTName(e.target.value)} />
                                </label>
                            </div>
                            <h2 className="col mt-4">Yhteystiedot:</h2>
                            <div className="mt-3 row">
                                <label>Sähköposti
                                <input type="email" value={email} maxlength="80" required className="form-control form-control-lg" name="email" placeholder="Sähköposti" onChange={e => setEmail(e.target.value)} />
                                </label>
                            </div>
                            <div className="mt-3 row">
                                <label>Puhelin
                                <input type="text" value={phone} required className="form-control form-control-lg" name="phone" placeholder="Puhelin (tarvitaan yhteydenpitoon)" onChange={e => setPhone(e.target.value)} />
                                </label>
                            </div>
                            <div className="mt-3 row">
                                <label>Yritys / yhteisö
                                <input type="text" value={corporation} className="form-control form-control-lg" name="corporation" placeholder="Yritys / yhteisö (valinnainen)" onChange={e => setCorporation(e.target.value)} />
                                </label>
                            </div>
                            <div className="mt-3 row">
                                <label>Osoite
                                <input type="text" value={address} maxlength="50" required className="form-control form-control-lg" name="address" placeholder="Osoite" onChange={e => setAddress(e.target.value)} />
                                </label>
                            </div>
                            <div className="mt-3 row">
                                <label className="float-start col">Postinumero
                                <input type="text" value={postalCode} minlength="4" maxlength="5" required className="form-control form-control-lg" name="postalCode" placeholder="Postinumero" onChange={e => setPostalCode(e.target.value)} />
                                </label>
                                <label className="float-end col">Kaupunki
                                <input type="text" value={city} required className="form-control form-control-lg" name="city" placeholder="Kaupunki" onChange={e => setCity(e.target.value)} />
                                </label>
                            </div>

                            <div className="mt-3 text-primary">
                                <h1 className="text-primary">Toimitus</h1>
                            </div>
                            <div className="mt-3 row">
                                <label>Toimitusosoite (Valinnainen)
                                <input type="text" value={shippingAddress} maxlength="50" className="form-control form-control-lg" name="shippingAddress" placeholder="Toimitusosoite (Valinnainen)" onChange={e => setShippingAddress(e.target.value)} />
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <label>Postinumero (Valinnainen)
                                <input type="text" value={shippingPostalCode} minlength="4" maxlength="5" className="form-control form-control-lg" name="shippingPostalCode" placeholder="Postinumero (Valinnainen)" onChange={e => setShippingPostalCode(e.target.value)} />
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <label>Kaupunki (Valinnainen)
                                <input type="text" value={shippingCity} className="form-control form-control-lg" name="shippingCity" placeholder="Kaupunki (Valinnainen)" onChange={e => setShippingCity(e.target.value)} />
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <div className="form-check form-control-lg">
                                <input className="form-check-input " type="radio" name="shippingMethod" id="shippingMethodRadios1" value="lk" onChange={e => setShippingMethod(e.target.value)} defaultChecked />
                                <label className="form-check-label" for="shippingMethodRadios1">
                                    Nouda Lähimmästä Kaupasta
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios2" value="p" onClick={e => setShippingMethod(e.target.value)}/>
                                <label className="form-check-label" for="shippingMethodRadios2">
                                    Postiin
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios3" value="mh" onClick={e => setShippingMethod(e.target.value)}/>
                                <label className="form-check-label" for="shippingMethodRadios3">
                                    Matkahuolto
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios4" value="pp" onClick={e => setShippingMethod(e.target.value)}/>
                                <label className="form-check-label" for="shippingMethodRadios4">
                                    Pikaposti (Matkahuolto)
                                </label>
                                </div>
                                <div className="form-check form-control-lg">
                                    <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios4" value="pikaposti" onClick={e => setShippingMethod(e.target.value)} />
                                    <label className="form-check-label" for="shippingMethodRadios4">
                                        Pikaposti (Matkahuolto)
                                </label>
                                </div>
                            </div>

                            <div className="mt-3">
                                <h1 className="text-primary">Laskutus</h1>
                            </div>
                            <div className="mt-3 row">
                                <div className="form-check form-control-lg">
                                    <input className="form-check-input " type="radio" name="paymentMethod" id="paymentMethodRadios1" value="lasku" onChange={e => setPaymentMethod(e.target.value)} defaultChecked />
                                    <label className="form-check-label" for="paymentMethodRadios1">
                                        Lasku
                                </label>
                                </div>
                                <div className="form-check form-control-lg">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="paymentMethodRadios2" value="postissa" onClick={e => setPaymentMethod(e.target.value)} />
                                    <label className="form-check-label" for="paymentMethodRadios2">
                                        Maksu postissa
                                </label>
                                </div>
                            </div>

                            <div className="col text-lg-end text-md-center text-sm-center mt-5 mb-4">{!isConfirmed ? (<button type="submit" class="btn btn-primary">Tilaa</button>) : (<LoadingButton />)}
                            </div>
                        </div>
                    </form>
                    <div className="col-sm-12 col-md-12 col-lg-8 d-none d-md-block">
                        <div className="mt-2 h-25 w-75 d-inline-block float-md-end float-sm-center">
                            <CartContextProvider>
                                <CartList kassa={kassa}></CartList>
                            </CartContextProvider>
                        </div>
                    </div>
                </div>
            </div>
        )
}
