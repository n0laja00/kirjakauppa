import React, { useContext, useState, useEffect } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import uuid from 'react-uuid';
import Loading from '../Loading';

const CartDetails = ({ item, handleDelete, handleAddition, kassa }) /*item annetaan alas proppina*/ => {

    const [book, setBook] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
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
                    setIsLoaded(true);
                }, (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            );
    }, []);

    if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <li className="row">
                {book.map(el => (
                    <div key={uuid()} className="">
                        <div className="float-start d-none d-lg-block col-4">
                            <img className="cartItemImg img-fluid col-sm-4 col-md-2 col-lg-2" src={imgURL + el.kuva} alt={el.kirjaNimi} />
                        </div>

                        <Link to={'/BookDetails/' + el.kirjaNro} className="link">
                            <h4 className="text-lg-end text-md-center text-md-sm text-center text-break">{el.kirjaNimi}</h4>
                            <p className="text-lg-end text-md-center text-sm-center text-center"> {el.sukunimi}, {el.etunimi} </p>
                        </Link>

                        <h5 className="hinta cartItem text-end" value={el.hinta} onChange={(e) => handleTotalPrice(e.target.value)}> {item.maara} x {el.hinta} €</h5>

                        <div className={"row" + `${kassa ? " hidden" : ""}`}>
                            <div className="text-lg-end text-md-end text-sm-center text-center">
                                <button className="btn btn-danger text-wrap col-5 fa fa-minus-circle fa-lg" onClick={() => handleDelete(el, item)} type="button"></button>
                                <button className="ms-2 btn btn-success text-wrap col-5 fa fa-plus-circle fa-lg" onClick={() => handleAddition(el, item)} type="button"></button>
                            </div>

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