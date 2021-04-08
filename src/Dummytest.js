import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'
import ls from 'local-storage'
import FindBooksInCart from './FindBooksInCart';






export default function Dummytest() {

    const [bookNum, setBookNum] = useState([]);

        
    function localStore(){
        localStorage.setItem('shoppingCart', ['1', '2', '3','3']);
        
    };
    function handleClick(e) {
        e.preventDefault();
        <FindBooksInCart/>
        console.log()
        setBookNum([localStorage.getItem]); 
        console.log(bookNum);
    }
    
    return (
        <div>
            <button onClick={localStore}>dadwa</button>

        </div>
    )
}
