import { useState, useEffect, React } from 'react'

export default function AddItem() {

    const [book, setBook] = useState([]);
    const [allPublishers, setAllPublishers] = useState([]);
    const [allBookCategories, setAllCategories] = useState([]);
    const [publisher, setPublisher] = useState('publisher');
    const [bookName, setBookName] = useState(''); 
    const [bookWriterFN, setBookWriterFN] = useState(''); 
    const [bookWriterLN, setBookWriterLN] = useState(''); 
    const [bookPage, setBookPage] = useState(''); 
    const [bookPrice, setBookPrice] = useState(''); 
    const [bookExpense, setBookExpense] = useState(''); 
    const [bookDesc, setBookDesc] = useState(''); 
    const [bookPublished, setBookPublished] = useState(''); 
    const [bookCategory, setBookCategory] = useState('');
    const [bookCategory2, setBookCategory2] = useState('');
    const [image, setImage] = useState(null);

    //Julkaisijan lisääminen 
    const[newPublisher, setNewPublisher] = useState('');
    const[newPublisherPhone, setNewPublisherPhone] = useState('');
    const[newPublisherEmail, setNewPublisherEmail] = useState('');
    const [show, setShow] = useState(true);

    //Julkaisulistan päivittäminen 
    const [submit, setSubmit] = useState(0);

    //Tallennusteksti
    const [saved, setSaved] = useState('');

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
    }, [submit])

    function handleChange(e) {
        setImage(e.target.files[0]);
      }

    function addBook(e) {
        //Tiedoston lisäys 
        e.preventDefault();
        if(image !== null) {
        const formData = new FormData();
        formData.append('file',image);
        formData.append('bookName',bookName);
        formData.append('bookDesc',bookDesc);
        formData.append('bookPrice',bookPrice);
        formData.append('bookExpense',bookExpense);
        formData.append('bookPage', bookPage);
        formData.append('publisher',publisher);
        formData.append('bookPublished',bookPublished);
        formData.append('bookWriterFN',bookWriterFN);
        formData.append('bookWriterLN',bookWriterLN);
        formData.append('bookCategory',bookCategory);
        formData.append('bookCategory2',bookCategory2);
        fetch (URL + 'lisaaTuote.php',
            {
            method: 'POST',
            body: formData 
            }
        )
        .then((res) => res.json())
        if(bookName !== '' && bookDesc !== '' && bookPrice !== '' && bookExpense !== '' && bookPage !== '' && publisher !== '' && bookPublished !== '' && bookWriterFN
        !== '' && bookWriterLN !== '' && bookCategory !== '') {
        setSaved("Tiedot tallennettu!");
        setSubmit(submit+1);
        setBookName('');
        setBookDesc('');
        setBookPrice('');
        setBookExpense('');
        setBookPage('');
        setPublisher('');
        setBookPublished('');
        setBookWriterFN('');
        setBookWriterLN('');
        setBookCategory('');
        }
        }
    }

    function addPublisher(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('publisher',newPublisher);
        formData.append('phonenumber',newPublisherPhone);
        formData.append('email',newPublisherEmail);

        fetch (URL + 'lisaaJulkaisija.php',
            {
            method: 'POST',
            body: formData 
            }
        )
        .then((res) => res.json())
        if (newPublisher !== '' && newPublisherPhone !== '' && newPublisherEmail !== '') {
        setSaved("Tiedot tallennettu!");
        setNewPublisher('');
        setNewPublisherPhone('');
        setNewPublisherEmail('');
        setSubmit(submit+1);
        }
    }

    function toggleClass() {
        setShow(!show)
        setSaved('');
    }

    return (
        <div className="addItemContainer">
            <h3>Lisää tuote:</h3>
            <form className="row g-3 addItemForm mt-1" onSubmit={addBook}>
                <div className="col-md-6">
                    <label for="kirjaNimi" className="form-label">Kirjan nimi</label>
                    <input type="text" className="form-control" id="kirjaNimi" name="kirjanimi" value={bookName} placeholder="Kirjan nimi" required onChange={e => setBookName(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label for="julkaisija" className="form-label">Julkaisija</label>
                    <select id="julkaisija" className="form-select" value={publisher} required onChange={e => setPublisher(e.target.value)}>
                    <option selected>Valitse...</option>
                    {allPublishers.map(publisher => (
                        <option>{publisher.julkaisija}</option>
                    ))}
                    {/* Pitää tehdä myöhemmin "Lisää uusi julkaisija" */}
                    </select>
                    <button type="button" className="btn border border-dark mt-1" onClick={toggleClass}>{show ? "Lisää uusi" : "Piilota"}</button>
                </div>

            <section className={"row p-5 publisherContainer m-1" + `section ${show ? "hidden" : ""}`}>
                <div className="col-md-4">
                    <label for="julkaisijaNimi" className="form-label">Julkaisijan nimi</label>
                    <input type="text" className="form-control" id="julkaisijaNimi" name="julkaisijaNimi" value={newPublisher} placeholder="Julkaisijan nimi" onChange={e => setNewPublisher(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label for="julkaisijaNimi" className="form-label">Puhelinnumero</label>
                    <input type="text" className="form-control" id="puhnro" name="puhnro" value={newPublisherPhone} placeholder="044.." onChange={e => setNewPublisherPhone(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label for="julkaisijaNimi" className="form-label">Sähköposti</label>
                    <input type="text" className="form-control" id="sposti" name="sposti" value={newPublisherEmail} placeholder="Esimerkki@sposti.com" onChange={e => setNewPublisherEmail(e.target.value)}/>
                </div>
                <div className="col-md-3 mt-1">
                   <button onClick={addPublisher} className="btn btn-primary" type="button">Lisää julkaisija</button>
                </div>
                <div className="col-12 text-muted m-0 p-0 ps-2">
                        <p>{saved}</p>
                </div>
            </section>

                <div className="col-md-3">
                    <label for="kirjoittajaEN" className="form-label">Kirjoittaja etunimi</label>
                    <input type="text" className="form-control" id="kirjoittajaEN" name="kirjoittajaEN" required value={bookWriterFN} placeholder="Eero" onChange={e => setBookWriterFN(e.target.value)}/>
                </div>
                <div className="col-md-3">
                    <label for="kirjoittajaSN" className="form-label">Kirjoittaja sukunimi</label>
                    <input type="text" className="form-control" id="kirjoittajaSN" name="kirjoittajaSN" required value={bookWriterLN} placeholder="Esimerkki" onChange={e => setBookWriterLN(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="sivuNro" className="form-label">Sivumäärä</label>
                    <input type="number" className="form-control" min="1" id="sivuNro" name="sivuNro" required value={bookPage} placeholder="Esim: 150" onChange={e => setBookPage(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="hinta" className="form-label">Hinta</label>
                    <input type="number" className="form-control" id="hinta" placeholder="Esim: 12.50" required value={bookPrice} onChange={e => setBookPrice(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label for="kustannus" className="form-label">Kustannus</label>
                    <input type="number" className="form-control" id="kustannus" placeholder="Esim: 11.50" required value={bookExpense} onChange={e => setBookExpense(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label for="kuvaus" className="form-label">Kuvaus</label>
                    <textarea name="kuvaus" id="kuvaus" cols="10" rows="10" className="form-control" required placeholder="Kirjan kuvaus" value={bookDesc} onChange={e => setBookDesc(e.target.value)}>
                    </textarea>
                </div>
                <div className="col-md-3">
                    <label for="julkaistu" className="form-label">Julkaistu</label>
                    <input type="date" className="form-control" id="julkaistu" value={bookPublished} required onChange={e => setBookPublished(e.target.value)}/>
                </div>

                <div className="col-5">
                    <label for="kategoria" className="form-label">Kategoria</label>
                    <select id="kategoria" className="form-select" required value={bookCategory} onChange={e => setBookCategory(e.target.value)}>
                    <option selected>Valitse...</option>
                    {allBookCategories.map(bookCategory => (
                        <option>{bookCategory.kategoria}</option>
                    ))}
                    </select>
                    <select id="kategoria2" className="form-select" required value={bookCategory2} onChange={e => setBookCategory2(e.target.value)}>
                    <option selected>Valitse...</option>
                    {allBookCategories.map(bookCategory2 => (
                        <option>+{bookCategory2.kategoria}</option>
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

                <div className="col-12 text-muted m-0 p-0">
                        <p>{saved}</p>
                </div>
                </form>
        </div>
    )
}
