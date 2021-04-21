import { useEffect, useState, React } from 'react';
import { Redirect } from 'react-router';
import AddItem from './AddItem';

export default function EditItemList({user}) {

    const [books, setBooks] = useState([]);
    const [switchComponents, setSwitchComponents] = useState(false);
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
      }, [])

    if (user===null) {
        return <Redirect to="/LoginPage" />
    }

    function toggleClass() {
        setSwitchComponents(!switchComponents);
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
                <td><a className="poistoPainike"
                 onClick={() => { if (window.confirm('Oletko varma, että haluat poistaa tämän tuotteen:' + book.kirjaNimi + '?')) this.onCancel(book) } }>
                     Poista</a>{book.kirjaNimi}
                </td>
                <td>{book.sivuNro}</td>
                <td>{book.hinta}</td>
                <td>{book.ale}</td>
                <td>{book.kustannus}</td>
                <td className="cut-text kuvaus">{book.kuvaus}</td>
                <td>{book.kuva}</td>
                <td><a className="poistoPainike"
                 onClick={() => { if (window.confirm('Oletko varma, että haluat poistaa tämän julkaisijan:' + book.julkaisija + '?')) this.onCancel(book) } }>
                     Poista</a>{book.julkaisija}</td>
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
