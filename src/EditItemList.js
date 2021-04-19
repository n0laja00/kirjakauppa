import { useEffect, useState, React } from 'react';

export default function EditItemList() {

    const [books, setBooks] = useState([]);
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

    return (
        <div>
            <p>testitesti</p>
            <table>
                <tr>
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
                <tr>
                <td>{book.kirjaNimi}</td>
                <td>{book.sivuNro}</td>
                <td>{book.hinta}</td>
                <td>{book.ale}</td>
                <td>{book.kustannus}</td>
                <td className="cut-text">{book.kuvaus}</td>
                <td>{book.kuva}</td>
                <td>{book.julkaisija}</td>
                <td>{book.julkaistu}</td>
                </tr>
                
                
                </>
             ))}
            </table>
        </div>
    )
}
