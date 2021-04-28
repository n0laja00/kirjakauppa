import { useEffect, useState, React } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

export default function CarouselBookSelect() {

    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const URL = 'http://localhost/kirjakauppa/';
    //Kirjalistan päivittäminen 
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        let status = 0;

        fetch(URL + "kaikkiKirjat.php")
        .then (res => {
         status = parseInt(res.status);
         return res.json();
        })
        .then(
          (res) => {
     
            if(status === 200) {
                setBooks(res);
                setIsLoaded(true);
           } else {
             alert(res.error);
           }
     
          }, (error) => {
           alert("An error has occurred, please try again later.");
          }
        )
      }, [submit])

    if (!isLoaded) {
        return <Loading />
     }
     else {
    return (
        <div>
            <h3>Valitse etusivulla näytettävät kuukauden kirjat</h3>
        </div>
    )
    }
}
