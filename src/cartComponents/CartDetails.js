import React, { useContext, useState, useEffect } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartDetails = ({item, handleDelete, kassa}) /*item annetaan alas proppina*/ => {

    const [book, setBook] = useState([])
    
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const URL = 'http://localhost/kirjakauppa/haeKirjaNro.php/'
    const imgURL = 'http://localhost/kirjakauppa/img/';
    
   

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
    
    
   


    
    if (!isLoaded) {
        //tähän jotain jos tulee virhe
        console.log(error);
        return <div className="row text-center pt-5"> <h2>Loading...</h2></div>;
    } else {
        
        return (
            
            <li className="row">
                {book.map(el => (
                    <div className="">
                        <div className="float-start d-none d-lg-block">
                            <img className="cartItemImg img-fluid col-4" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                        </div>

                        <Link to={'/BookDetails/'+ el.kirjaNro} className="link">
                            <h4 className="text-lg-end text-md-center text-sm-center">{el.kirjaNro} {el.kirjaNimi}</h4>
                            <p className="text-lg-end text-md-center text-sm-center"> {el.sukunimi}, {el.etunimi} </p>
                        </Link>
                       
                        <h5 className="hinta cartItem text-end" value={el.hinta} onChange={(e) => handleTotalPrice(e.target.value)}> {item.maara} x {el.hinta} €</h5>
                        
                        <div className={"col text-lg-end text-md-center text-sm-center" + `${kassa ? " hidden" : ""}`}>
                            <button className="btn btn-danger col-2 col-sm-3" onClick={() => handleDelete(el, item)} type="button">Poista</button>
                        </div>
                        
                    </div> 
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