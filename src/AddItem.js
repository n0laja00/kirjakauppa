import { useState, useEffect, React } from 'react'

export default function AddItem() {

    const [book, setBook] = useState([]);
    const [allPublishers, setAllPublishers] = useState([]);
    const [allBookCategories, setAllCategories] = useState([]);
    const [publisher, setPublisher] = useState('publisher');
    const [bookName, setBookName] = useState('name'); 
    const [bookWriterFN, setBookWriterFN] = useState('FN'); 
    const [bookWriterLN, setBookWriterLN] = useState('LN'); 
    const [bookPage, setBookPage] = useState('1'); 
    const [bookPrice, setBookPrice] = useState('2'); 
    const [bookExpense, setBookExpense] = useState('3'); 
    const [bookDesc, setBookDesc] = useState('description'); 
    const [bookPublished, setBookPublished] = useState('2021-04-01'); 
    const [bookCategory, setBookCategory] = useState('Toiminta');
    const [image, setImage] = useState(null);

    const URL = 'http://localhost/kirjakauppa/';

    useEffect(() => {
        let status = 0;

        fetch(URL + "julkaisijatLisaaTuote.php")
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
        alert("Virhe on tapahtunut, yritä uudelleen myöhemmin.");
        }
        )
        
        fetch(URL + "kategoriatLisaaTuote.php")
        .then (res => {
        status = parseInt(res.status);
        return res.json();
        })
        .then(
        (res) => {
    
            if(status === 200) {
        setAllCategories(res);
        } else {
            alert(res.error);
        }
    
        }, (error) => {
        alert("Virhe on tapahtunut, yritä uudelleen myöhemmin.");
        }
        )
    }, [])

    function handleChange(e) {
        setImage(e.target.files[0]);
      }


    function addBook(e) {
        //Tiedoston lisäys 
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',image);
        formData.append('bookName',bookName);
        formData.append('bookDesc',bookDesc);
        formData.append('bookPrice',bookPrice);
        formData.append('bookExpense',bookExpense);
        formData.append('publisher',publisher);
        formData.append('bookPublished',bookPublished);
        formData.append('bookWriterFN',bookWriterFN);
        formData.append('bookWriterLN',bookWriterLN);
        formData.append('bookCategory',bookCategory);
        fetch (URL + 'saveimage.php',
            {
            method: 'POST',
            body: formData 
            }
        )
        .then((res) => res.json())
        .then ((result) => {
            console.log(result);
        })
    }

    return (
        <div className="addItemContainer">
            <h3>Lisää tuote:</h3>
            <form className="row g-3 addItemForm mt-1" onSubmit={addBook}>
                <div className="col-md-6">
                    <label for="kirjaNimi" className="form-label">Kirjan nimi</label>
                    <input type="text" className="form-control" id="kirjaNimi" name="kirjanimi" placeholder="Kirjan nimi" onChange={e => setBookName(e.target.value)}/>
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
                <div className="col-md-3">
                    <label for="kirjoittajaEN" className="form-label">Kirjoittaja etunimi</label>
                    <input type="text" className="form-control" id="kirjoittajaEN" name="kirjoittajaEN" placeholder="Eero" onChange={e => setBookWriterFN(e.target.value)}/>
                </div>
                <div className="col-md-3">
                    <label for="kirjoittajaSN" className="form-label">Kirjoittaja sukunimi</label>
                    <input type="text" className="form-control" id="kirjoittajaSN" name="kirjoittajaSN" placeholder="Esimerkki" onChange={e => setBookWriterLN(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="sivuNro" className="form-label">Sivumäärä</label>
                    <input type="number" className="form-control" min="1" id="sivuNro" name="sivuNro" placeholder="Esim: 150" onChange={e => setBookPage(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="hinta" className="form-label">Hinta</label>
                    <input type="number" className="form-control" id="hinta" placeholder="Esim: 12.50" onChange={e => setBookPrice(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="kustannus" className="form-label">Kustannus</label>
                    <input type="number" className="form-control" id="kustannus" placeholder="Esim: 11.50" onChange={e => setBookExpense(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label for="kuvaus" className="form-label">Kuvaus</label>
                    <textarea name="kuvaus" id="kuvaus" cols="10" rows="10" className="form-control" placeholder="Kirjan kuvaus" onChange={e => setBookDesc(e.target.value)}>
                    </textarea>
                </div>
                <div className="col-md-3">
                    <label for="julkaistu" className="form-label">Julkaistu</label>
                    <input type="date" className="form-control" id="julkaistu" onChange={e => setBookPublished(e.target.value)}/>
                </div>

                <div className="col-5">
                    <label for="kategoria" className="form-label">Kategoria</label>
                    <select id="kategoria" className="form-select" onChange={e => setBookCategory(e.target.value)}>
                    <option selected>Valitse...</option>
                    {allBookCategories.map(bookCategory => (
                        <option>{bookCategory.kategoria}</option>
                    ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <label for="tiedosto" className="form-label">Lisää kuva</label>
                    <input className="form-control text-end" type="file" name="file" id="file" onChange={handleChange}/>
                </div>
                <div className="col-12 p-2">
                    <button type="submit" className="btn btn-primary">Lisää kirja</button>
                </div>
                </form>
        </div>
    )
}
