import React, {useContext,useState} from 'react';
import { CartContext } from '../contexts/CartContext';

const TestAddItem = () => {
    const {dispatch} = useContext(CartContext);
    const [kirjaNro, setKirjaNro] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TO_CART', item: {
            kirjaNro
        }});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="submit" value={kirjaNro} onClick={(e) => setKirjaNro(e.target.value+1)}></input>
        </form>
     );
}
 
export default TestAddItem