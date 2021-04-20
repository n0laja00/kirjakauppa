import { useEffect, useState, React } from 'react';
import { Redirect } from 'react-router';

export default function EditItemList({user}) {

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

    if (user===null) {
        return <Redirect to="/LoginPage" />
    }

    return (
        <>
        <div className="itemTable">
            <p>testitesti</p>
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
                <td>{book.kirjaNimi}</td>
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
        <button>Lisää uusi</button>

        <form class="row g-3">
            <div class="col-md-6">
            <label for="kirjanimi" class="form-label">Kirjan nimi</label>
            <input type="kirjanimi" class="form-control" id="kirjanimi"/>
            </div>
            <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                Check me out
                </label>
            </div>
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    </>
    )
}
