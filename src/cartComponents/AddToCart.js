import React, {useContext,useState} from 'react';
import { CartContext } from '../contexts/CartContext';

const AddToCart = ({item}) => {
    const {dispatch} = useContext(CartContext);
    const [kirjaNro, setKirjaNumero] = useState(item.kirjaNro);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TO_CART', item: {
            kirjaNro
        }});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <button className="btn btn-primary m-3 col-8" type="submit" value={item.kirjaNro} onClick={(e) => setKirjaNumero(e.target.value)}>Lisää Ostoskoriin</button>
        </form>
     );
}
 
export default AddToCart