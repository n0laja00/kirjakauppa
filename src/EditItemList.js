import { useEffect, useState, React } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import AddItem from './AddItem';

export default function EditItemList({user}) {

    const [books, setBooks] = useState([]);
    const [switchComponents, setSwitchComponents] = useState(false);
    const[bookNo, setBookNo] = useState('');
    const[selected, setSelected] = useState(false);

    //Kirjalistan päivittäminen 
    const [submit, setSubmit] = useState(false);

    const URL = 'http://localhost/kirjakauppa/';

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
           } else {
             alert(res.error);
           }
     
          }, (error) => {
           alert("An error has occurred, please try again later.");
          }
        )
      }, [submit])

    // if (user===null) {
    //     return <Redirect to="/LoginPage" />
    // }

    function toggleClass() {
        setSwitchComponents(!switchComponents);
        setSubmit(!submit);
    }

    function onRemove(bookNr) {
        let bookNumber = bookNr; 

        const formData = new FormData();
        formData.append('bookNr',bookNumber);

        fetch (URL + 'poistaKirja.php',
            {
            method: 'POST',
            body: formData 
            }
        )
        .then((res) => {
            setSubmit(!submit);
        }
        )
    }

    function updateSelect(bookNo, selected) {
        toggleClass();
        setBookNo(bookNo);
        setSelected(selected);
    }

    return (
        <>
        <section className={"p-0" + `section ${switchComponents ? "hidden" : ""}`}>
        <div className="itemTable">
            <table>
                <tr className="text-center">
                    <th>Tuotenimi</th>
                    <th>Sivumäärä</th>
                    <th>Hinta</th>
                    <th>Ale</th>
                    <th>Kustannus</th>
                    <th>Kuvaus</th>
                    <th>Kuvanimi</th>
                    <th>Julkaisija</th>
                    <th>Julkaisupäivä</th>
                    <th>Luotu</th>
                </tr>
            {books.map(book => (
                <>
                <tr className="listaValinta">
                <Link to={'/UpdateItem/' + book.kirjaNro}>
                    <button>kirjuli</button>
                </Link>
                <td><a className="poistoPainike"
                 onClick={() => { if (window.confirm('Oletko varma, että haluat poistaa tämän tuotteen:' + book.kirjaNimi + '?')) onRemove(book.kirjaNro) } }>
                     Poista</a>{book.kirjaNimi}
                </td>
                <td>{book.sivuNro}</td>
                <td>{book.hinta}</td>
                <td>{book.ale}</td>
                <td>{book.kustannus}</td>
                <td className="cut-text kuvaus">{book.kuvaus}</td>
                <td>{book.kuva}</td>
                <td>{book.julkaisija}</td>
                <td>{book.julkaistu}</td>
                <td>{book.luotu}</td>
                </tr>
                </>
             ))}
            </table>
        </div>
        <button onClick={toggleClass} className="mt-2 btn btn-primary">Lisää uusi</button>
    </section>
    <section className={"p-0" + `section ${switchComponents ? "" : "hidden"}`}>
    <AddItem/>
    <button onClick={toggleClass} className="ms-2 btn btn-primary">Kaikki tuotteet</button>
    </section>
    </>
    )
}
