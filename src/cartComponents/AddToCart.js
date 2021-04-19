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
        const books = cart;

        if(books.some((yksi) => yksi.kirjaNro === item.kirjaNro)) {
            
            const change = 1;
            const itemIndex = books.findIndex((book) => book.kirjaNro === item.kirjaNro);
            
            books[itemIndex].maara = books[itemIndex].maara + change;
            console.log(books[itemIndex].maara);
            localStorage.setItem('cart', JSON.stringify(books));
        } else {
            dispatch({type: 'ADD_TO_CART', item: {
                kirjaNro,
                hinta,
                maara
            }});
        }
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <button className="btn btn-primary m-3 col-8" type="submit" value={item.kirjaNro} onClick={(e) => setKirjaNumero(e.target.value)}>Lisää Ostoskoriin</button>
            <input type="number" value={item.hinta} onSubmit= {(e) => setHinta(e.target.value)} hidden/>
            
        </form>
     );
}
 
export default AddToCart