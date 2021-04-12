import React, {useContext,useState} from 'react';
import { CartContext } from '../contexts/CartContext';
import { cartReducer } from '../reducers/cartReducer';

const AddToCart = ({item}) => {
    const {dispatch} = useContext(CartContext);
    const [kirjaNro, setKirjaNumero] = useState(item.kirjaNro);
    const [hinta, setHinta] = useState(Number(item.hinta));
    const [maara, setMaara] = useState(1);
    const {cart} = useContext(CartContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        

        if(cart.some((yksi) => yksi.kirjaNro === item.kirjaNro)) {
            const books = cart;
            const change = 1;
            const itemIndex = books.findIndex((book) => book.kirjaNro === item.kirjaNro);
            
            cart[itemIndex].maara = cart[itemIndex].maara + change;
            console.log(cart[itemIndex].maara);
            localStorage.setItem('cart', JSON.stringify(books));
        } else {
            dispatch({type: 'ADD_TO_CART', item: {
                kirjaNro,
                hinta,
                maara
            }});
            setKirjaNumero('');
            setHinta('');
            setMaara('')
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <button className="btn btn-primary m-3 col-8" type="submit" value={item.kirjaNro} onClick={(e) => setKirjaNumero(e.target.value)}>Lisää Ostoskoriin</button>
            <input type="number" value={item.hinta} onSubmit= {(e) => setHinta(e.target.value)} hidden/>
            <input type="number" value={maara} onSubmit= {(e) => setMaara(e.target.value)} hidden/>
        </form>
     );
}
 
export default AddToCart