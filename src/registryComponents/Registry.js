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
    

    
    function handleSubmit (e) {
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
        setCity('');
        setPostalCode('');
        localStorage.setItem('cart', JSON.stringify([]));
        
    };


    function test(e) {
        e.preventDefault();
        console.log(cart);
    }

    return (
        <div className="row">
            <h1 className="mt-2">Kassa</h1>
            <form onSubmit={handleSubmit}>
                <div className="col mt-3 ">
                    <div className="col text-end">
                        <input type="text" value={firstName} className="col-5 float-start form-control-lg" name="firstName" placeholder="Etunimi" onChange={e => setFirstName(e.target.value)}/>
                        <input type="text" value={lastName} className="col-6 form-control-lg" name="lastName" placeholder="Sukunimi" onChange={e => setLastTName(e.target.value)}/>
                    </div>
                    <h2 className="col mt-4">Yhteystiedot:</h2>
                    <div className="mt-3 col">
                        <input type="email" value={email} className="form-control form-control-lg" name="email" placeholder="Sähköposti" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-3 col">
                        <input type="text" value={phone} className="form-control form-control-lg" name="phone" placeholder="Puhelin (tarvitaan yhteydenpitoon)" onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="mt-3 col">
                        <input type="text" value={corporation} className="form-control form-control-lg" name="corporation" placeholder="Yritys / yhteisö (valinnainen)" onChange={e => setCorporation(e.target.value)}/>
                    </div>
                    <div className="mt-3 col">
                        <input type="text" value={address} className="form-control form-control-lg" name="address" placeholder="Osoite" onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="mt-3 col text-end">
                        <input type="text" value={postalCode} className="col-5 float-start form-control-lg" name="postalCode" placeholder="Postinumero" onChange={e => setPostalCode(e.target.value)}/>
                        <input type="text" value={city} className="col-6 form-control-lg" name="city" placeholder="Kaupunki" onChange={e => setCity(e.target.value)}/>
                    </div>
                    <input type="submit"/>
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
        
        
    )
}
