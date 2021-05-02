import { useEffect, useState, React } from 'react';
import Loading from '../Loading';


export default function CarouselBookSelect(props) {

    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [saved, setSaved] = useState('');

    const[book1, setBook1] = useState('');
    const[book2, setBook2] = useState('');
    const[book3, setBook3] = useState('');
    const[book4, setBook4] = useState('');


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


      function addBookCarousel(e) {
        //Tiedoston lisäys 
        e.preventDefault();
        if(book1 !== '' && book2 !== '' && book3 !== '' && book4 !== '') {
        const formData = new FormData();
        formData.append('book1',book1);
        formData.append('book2',book2);
        formData.append('book3',book3);
        formData.append('book4',book4);
        fetch (URL + 'lisaaKuukaudenKirjat.php',
            {
            method: 'POST',
            body: formData 
            }
        )
        .then((res) => {
        setSaved("Tiedot tallennettu!");
        setSubmit(!submit);
        })
        }
    }

    if (!isLoaded) {
        return <Loading />
     }
     else {
    return (
        <div className="my-3">
            <h3>Valitse etusivulla näytettävät kuukauden kirjat</h3>
            <form onSubmit={addBookCarousel}>
            <select id="kirja1" className="form-select my-1" required onChange={e => setBook1(e.target.value)}>
                    <option>Valitse ensimmäinen kirja</option>
                    {books.map(book => (
                        <option key={book.kirjaNro}>{book.kirjaNimi}</option>
                    ))}
            </select>

            <select id="kirja2" className="form-select my-1" required onChange={e => setBook2(e.target.value)}>
                    <option>Valitse toinen kirja</option>
                    {books.map(book => (
                        <option key={book.kirjaNro}>{book.kirjaNimi}</option>
                    ))}
            </select>

            <select id="kirja3" className="form-select my-1" required onChange={e => setBook3(e.target.value)}>
                    <option>Valitse kolmas kirja</option>
                    {books.map(book => (
                        <option key={book.kirjaNro}>{book.kirjaNimi}</option>
                    ))}
            </select>

            <select id="kirja4" className="form-select my-1" required onChange={e => setBook4(e.target.value)}>
                    <option>Valitse neljäs kirja</option>
                    {books.map(book => (
                        <option key={book.kirjaNro}>{book.kirjaNimi}</option>
                    ))}
            </select>
            <button className="btn btn-primary">Lähetä tiedot</button>
            <p>{saved}</p>
            </form>
        </div>
    )
    }
}
