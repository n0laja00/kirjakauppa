import React, {useState}  from 'react'
import CartList from '../cartComponents/CartList'
import CartContextProvider from '../contexts/CartContext'


export default function Registry() {
    const [tilaus, setTilaus] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastTName]= useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [corporation, setCorporation] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const [paymentMethod, setPaymentMethod] = useState('lasku');
    const [shippingAddress, setShippingAddress] = useState('');
    const [shippingMethod, setShippingMethod] = useState('lähinKauppa');
    

    
    function handleSubmit (e) {
        if (shippingAddress.length <= 0) {
            setShippingAddress(address);
        }
        e.preventDefault();
        const URL = 'http://localhost/kirjakauppa/';
        let status = 0; 
        fetch(URL + 'asetaTilaus.php', {
            method: 'POST',
            headers : {
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
<<<<<<< HEAD

=======
                toimitustapa: shippingMethod,
>>>>>>> 13119e2599d3c5593e50dfa823915b1ff3198d59
            })
        })
        .then(res=> {
            status = parseInt(res.status); 
            return res.json(); 
          })
        .then ((res) => {
            if (status === 200) {
                
                console.log('tilaus tehty');
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
        localStorage.setItem('cart', JSON.stringify([]));
        
    };


    function test(e) {
        e.preventDefault();
        if (shippingAddress.length <= 0) {
            setShippingAddress(address);
        }
        console.log(shippingAddress);
    }

    return (
        <div className="row">
            <h1 className=" col mt-2">Kassa</h1>
            <div className="row">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="col mt-3 ">
                        <div className="row">
                            <label className="float-start col">Etunimi
                                <input type="text" value={firstName} maxlength="20" required className="form-control form-control-lg" name="firstName" placeholder="Etunimi" onChange={e => setFirstName(e.target.value)}/>
                            </label>
                            <label className="float-end col"> Sukunimi
                                <input type="text" value={lastName} maxlength="20" required className="form-control form-control-lg" name="lastName" placeholder="Sukunimi" onChange={e => setLastTName(e.target.value)}/>
                            </label>
                        </div>
                        <h2 className="col mt-4">Yhteystiedot:</h2>
                        <div className="mt-3 row">
                            <label>Sähköposti
                                <input type="email" value={email} maxlength="80" required className="form-control form-control-lg" name="email" placeholder="Sähköposti" onChange={e => setEmail(e.target.value)}/>
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <label>Puhelin
                                <input type="text" value={phone} required className="form-control form-control-lg" name="phone" placeholder="Puhelin (tarvitaan yhteydenpitoon)" onChange={e => setPhone(e.target.value)}/>
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <label>Yritys / yhteisö
                                <input type="text" value={corporation} className="form-control form-control-lg" name="corporation" placeholder="Yritys / yhteisö (valinnainen)" onChange={e => setCorporation(e.target.value)}/>
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <label>Osoite
                                <input type="text" value={address} maxlength="50" required className="form-control form-control-lg" name="address" placeholder="Osoite" onChange={e => setAddress(e.target.value)}/>
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <label className="float-start col">Postinumero
                                <input type="text" value={postalCode} minlength="4" maxlength="5" required className="form-control form-control-lg" name="postalCode" placeholder="Postinumero" onChange={e => setPostalCode(e.target.value)}/>
                           </label>
                           <label className="float-end col">Kaupunki
                                <input type="text" value={city} required className="form-control form-control-lg" name="city" placeholder="Kaupunki" onChange={e => setCity(e.target.value)}/>
                            </label>
                        </div>

                        <div className="mt-3">
                            <h1>Toimitus</h1>
                        </div>
                        <div className="mt-3 row">
                            <label>Toimitusosoite (Valinainen)
                                <input type="text" value={shippingAddress} maxlength="50" className="form-control form-control-lg" name="shippingAddress" placeholder="Toimitusosoite" onChange={e => setShippingAddress(e.target.value)}/>
                            </label>
                        </div>
                        <div className="mt-3 row">
                            <div className="form-check form-control-lg">
                                <input className="form-check-input " type="radio" name="shippingMethod" id="shippingMethodRadios1" value="lähinKauppa" onChange={e => setShippingMethod(e.target.value)} defaultChecked />
                                <label className="form-check-label" for="shippingMethodRadios1">
                                    Nouda Lähimmästä Kaupasta
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios2" value="postiin" onClick={e => setShippingMethod(e.target.value)}/>
                                <label className="form-check-label" for="shippingMethodRadios2">
                                    Postiin
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios3" value="matkahuolto" onClick={e => setShippingMethod(e.target.value)}/>
                                <label className="form-check-label" for="shippingMethodRadios3">
                                    Matkahuolto
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="shippingMethod" id="shippingMethodRadios3" value="pikaposti" onClick={e => setShippingMethod(e.target.value)}/>
                                <label className="form-check-label" for="shippingMethodRadios3">
                                    Pikaposti (Matkahuolto)
                                </label>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h1>Laskutus</h1>
                        </div>
                        <div className="mt-3 row">
                            <div className="form-check form-control-lg">
                                <input className="form-check-input " type="radio" name="paymentMethod" id="paymentMethodRadios1" value="lasku" onChange={e => setPaymentMethod(e.target.value)} defaultChecked />
                                <label className="form-check-label" for="paymentMethodRadios1">
                                    Lasku
                                </label>
                            </div>
                            <div className="form-check form-control-lg">
                                <input className="form-check-input" type="radio" name="paymentMethod" id="paymentMethodRadios2" value="postissa" onClick={e => setPaymentMethod(e.target.value)}/>
                                <label className="form-check-label" for="paymentMethodRadios2">
                                    Maksu postissa
                                </label>
                            </div>
                        </div>
                        
                      
                        <button type="submit" class="btn btn-primary">Tilaa</button>
                    </div>
                </form>
                <div className="col">
                <div className="ms-5 h-25 w-75 d-inline-block float-end">
                    <CartContextProvider>
                        <CartList></CartList>
                    </CartContextProvider>
                </div>
            </div>
            </div>
        </div>
        
        
    )
}
