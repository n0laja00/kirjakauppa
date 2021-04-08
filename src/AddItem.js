import { useState, useEffect, React } from 'react'

export default function AddItem() {

    const [book, setBook] = useState([]);
    const [allPublishers, setAllPublishers] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [bookName, setBookName] = useState([]); 
    const [bookWriter, setBookWriter] = useState([]); 
    const [bookPage, setBookPage] = useState([]); 
    const [bookPrice, setBookPrice] = useState([]); 
    const [bookExpense, setBookExpense] = useState([]); 
    const [bookDesc, setBookDesc] = useState([]); 
    const [bookPublished, setBookPublished] = useState([]); 

    const URL = 'http://localhost/kirjakauppa/';

    useEffect(() => {
        let status = 0;

        fetch(URL + "julkaisija.php")
        .then (res => {
        status = parseInt(res.status);
        return res.json();
        })
        .then(
        (res) => {
    
            if(status === 200) {
        setAllPublishers(res);
        } else {
            alert(res.error);
        }
    
        }, (error) => {
        alert("An error has occurred, please try again later.");
        }
        )
    }, [])

    function addBook(e) {
        e.preventDefault();
        let status = 0;
        fetch(URL + 'lisaaKirja.php',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            bookName: bookName,
            bookPage: bookPage,
            bookPrice: bookPrice,
            bookExpense: bookExpense,
            bookDesc: bookDesc,
            publisherNo: publisher.julkaisijaNro,
            bookPublished: bookPublished
          })
        })
        .then (res => {
          status = parseInt(res.status);
          return res.json();
        })
        .then(
          (res) => {
            if (status === 200) {
              setBook(book=>[...book,res]);
              setBook('');
            }else {
              alert(res.error);
            }
          }, (error) => {
            alert('Häiriö järjestelmässä, yritä kohta uudelleen');
          }
        )
       }

    return (
        <div className="addItemContainer">
            <h3>Lisää tuote:</h3>
            <form className="row g-3 addItemForm mt-1" onSubmit={addBook}>
                <div className="col-md-6">
                    <label for="kirjaNimi" className="form-label">Kirjan nimi</label>
                    <input type="text" className="form-control" id="kirjaNimi" name="kirjanimi" onChange={e => setBookName(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label for="julkaisija" className="form-label">Julkaisija</label>
                    <select id="julkaisija" className="form-select" onChange={e => setPublisher(e.target.value)}>
                    <option selected>Valitse...</option>
                    {allPublishers.map(publisher => (
                        <option>{publisher.julkaisija}</option>
                    ))}
                    {/* Pitää tehdä myöhemmin "Lisää uusi julkaisija" */}
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="kirjoittaja" className="form-label">Kirjoittaja</label>
                    <input type="text" className="form-control" id="kirjoittaja" name="kirjoittaja" onChange={e => setBookWriter(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="sivuNro" className="form-label">Sivumäärä</label>
                    <input type="number" className="form-control" min="1" id="sivuNro" name="sivuNro" onChange={e => setBookPage(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="hinta" className="form-label">Hinta</label>
                    <input type="number" className="form-control" id="hinta" min="1" onChange={e => setBookPrice(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="kustannus" className="form-label">Kustannus</label>
                    <input type="number" className="form-control" id="kustannus" min="1" onChange={e => setBookExpense(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label for="kuvaus" className="form-label">Kuvaus</label>
                    <textarea name="kuvaus" id="kuvaus" cols="10" rows="10" className="form-control" onChange={e => setBookDesc(e.target.value)}>
                    </textarea>
                </div>
                <div className="col-md-3">
                    <label for="julkaistu" className="form-label">Julkaistu</label>
                    <input type="date" className="form-control" id="julkaistu" onChange={e => setBookPublished(e.target.value)}/>
                </div>

                <div className="col-5">

                </div>

                <div className="col-md-4">
                    <label for="tiedosto" className="form-label">Lisää kuva</label>
                    <input className="form-control text-end" type="file" name="tiedosto" id="tiedosto"/>
                </div>
                <div className="col-12 p-2">
                    <button type="submit" className="btn btn-primary">Lisää kirja</button>
                </div>
                </form>
        </div>
    )
}
