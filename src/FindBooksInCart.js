import React from 'react'
import { useState, useEffect} from 'react'

export default function FindBooksInCart1() {
    
        const [error, setError] = useState('');
        const [isLoaded, setIsLoaded] = useState(true);
        const URL1 = 'http://localhost/kirjakauppa/haeKirjaNro';
        const imgURL = 'http://localhost/kirjakauppa/img/';
        const [bookNum, setBookNum] = useState([]);

        alert(localStorage.getItem('shoppingCart'));
        
}
