import React, { useContext, useState, useEffect } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartDetails = ({item}) /*item annetaan alas proppina*/ => {
    const {dispatch} = useContext(CartContext);

    const [book, setBook] = useState([])
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const URL = 'http://localhost/kirjakauppa/haeKirjaNro.php/'
    const imgURL = 'http://localhost/kirjakauppa/img/';
    const [totalPrice, setTotalPrice] = useState(0);
    let [all, setAll] = useState([]);
    

    const handleTotalPrice = (e) => {
        let count = e; 
        console.log(count)
    }
   

    useEffect(() => {

        fetch(URL + item.kirjaNro)
        .then(response => response.json())
        .then(
            (result) => {
                setBook(result);
 
                
            }, (error) => {
                setError(error);
                setIsLoaded(false);
            }
            
        );
        
    }, []);
    
    
    /*useEffect(() => {
        
        let count = result1
        setTotalPrice(totalPrice+Number(count))
        
        console.log(totalPrice)
    }, [])*/
        
   
    const handleDelete = (e) => {
        const cart = JSON.parse(localStorage.getItem('cart') || []); 
        if (item.maara > 1) {
            const books = cart;
            const change = 1;
            const itemIndex = books.findIndex((book) => book.kirjaNro === item.kirjaNro);
            cart[itemIndex].maara = cart[itemIndex].maara - change;
            console.log(cart[itemIndex].maara);
            localStorage.setItem('cart', JSON.stringify(books));
            console.log("iso");
        } else {
            dispatch({type: 'REMOVE_FROM_CART', id: item.id})
        }
    }




    


    
    if (!isLoaded) {
        //tähän jotain jos tulee virhe
        console.log(error);
        return <div className="row text-center pt-5"> <h2>Loading...</h2></div>;
    } else {
        
        return (
            
            <li className="row">
                {book.map(el => (
                    <>
                        <div className="col-3">
                            <img className="lista-kuva pull-left mr-2" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                        </div>
                        
                        <div className="col-9 "> 
                            <Link to={'/BookDetails/'+ el.kirjaNro} className="link text-center">
                                <h4 className="col-12 text-end cart-book-title">{el.kirjaNro} {el.kirjaNimi}</h4>
                            </Link>
                            <p className="kirjailija text-end"> {el.sukunimi}, {el.etunimi} </p>
                            <h5 className="hinta text-end" value={el.hinta} onChange={(e) => handleTotalPrice(e.target.value)}> {item.maara} x {el.hinta} €</h5>
                            
                            <button className="btn btn-danger float-end" onClick={(e) => handleDelete()} type="button">Poista</button>
                        </div>
                        
                       
                            
                    </>
                    
                ))}
                
            </li>
            
            
         );
    }
         /*

         {() => dispatch({type: 'REMOVE_FROM_CART', id: item.id})}


        return (
            <>
                {book.map(el => (
                    <div className="row" key={el.kirjaNro}>
                        <div className="row">
                            <h1 className="col-12 px-5 my-4 text-center">{el.kirjaNimi}</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="card-img-top customBorder mb-3" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                            </div>
                            <div className="col-sm-6">
                                <div className="customBorder bottomBg p-4">
                                    <h3 className="col-sm-12">Kuvaus</h3>
                                    <div className="col-sm-12">{el.kuvaus}</div>
                                    <div className="mt-4 col-sm-6">Hinta: {el.hinta} €</div>
                                    <div className="text-center">
                                        <CartContextProvider>
                                            <AddToCart item={el}/>
                                        </CartContextProvider>
                                    </div>
                                </div>
                                <div className="customBorder bottomBg p-4 my-3">
                                    <h3 className="col-12">Kirjan tiedot</h3>
                                    <div className="col-12">Kirjan nimi: {el.kirjaNimi}</div>
                                    <div className="col-12">Kirjailija: {el.sukunimi}, {el.etunimi}</div>
                                    <div className="col-12">Sivuja: {el.sivuNro} </div>
                                    <div className="col-12">Julkaisuvuosi: {el.julkaistu} </div>
                                    <div className="col-12">Julkaisija: {el.julkaisija} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
    

    return (
        <li onClick={() => dispatch({type: 'REMOVE_FROM_CART', id: item.id})}>
            <div className="kirjaNro">{ item.kirjaNro }</div> 
        </li>
     );
     */
    
}
 
export default CartDetails;