import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { cartReducer } from '../reducers/cartReducer';
import PromptAdded from './PromptAdded';

const AddToCart = ({ item }) => {
    const { dispatch } = useContext(CartContext);
    const [kirjaNro, setKirjaNumero] = useState(item.kirjaNro);
    const [hinta, setHinta] = useState(Number(item.hinta));
    const [maara, setMaara] = useState(1);
    const { cart } = useContext(CartContext);
    const [prompt, setPrompt] = useState(null);

    // useEffect(() => {
    //     console.log('Do something after counter has changed', counter);
    // }, [counter]);

    // add to cart prompt
    const promptHandler = (e) => {
        setTimeout(() => {
            e.preventDefault();
            setPrompt(true);
        }, setPrompt(false))
    };



    const handleSubmit = (e) => {

        e.preventDefault();
        let books = JSON.parse(localStorage.getItem('cart'));
        if (cart.some((yksi) => yksi.kirjaNro === item.kirjaNro)) {

            const change = 1;
            const itemIndex = books.findIndex((book) => book.kirjaNro === item.kirjaNro);

            books[itemIndex].maara = books[itemIndex].maara + change;
            localStorage.setItem('cart', JSON.stringify(books));
        } else {
            dispatch({
                type: 'ADD_TO_CART', item: {
                    kirjaNro,
                    hinta,
                    maara
                }
            });
        }
        setKirjaNumero('');
        setHinta('');
        setMaara('');
    };


    return (
        <>
            <PromptAdded prompt={prompt} />
            <form onSubmit={handleSubmit}>
                <button className="btn btn-primary m-3 col-8" type="submit" value={item.kirjaNro} onClick={(e) => { setKirjaNumero(e.target.value); promptHandler(e) }}>Lisää ostoskoriin</button>
                <input type="number" value={item.hinta} onSubmit={(e) => setHinta(e.target.value)} hidden />
            </form>
        </>
    );
}

export default AddToCart