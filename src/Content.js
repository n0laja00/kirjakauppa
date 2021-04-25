import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';
import BookCarousel from './Carousel'
import Loading from './Loading';

export default function Content({ setCategory }) {

    //Tässä on kirjat, jotka menee book carouseliin. Ne on tässä vielä ja jos aika riittää tehdään muuttujille niin, että ylläpitäjänä voit valita kuukauden kirjat.
    const book1 = "Jannen kirja";
    const book2 = "Terror of London";
    const book3 = "Maamme Kauneus";
    const book4 = "Jalkaväen Kauhein Hetki";
    const selected = "kuukaudenkirjat.php?book1=" + book1 + "&book2=" + book2 + "&book3=" + book3 + "&book4=" + book4;
    const newbooks = "uutuusKirjat.php";
    const URL = 'http://localhost/kirjakauppa/navKategoriat.php/';
    const [categories, setCategories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async() => {
        try {
            const response = await fetch(URL);
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
                setCategory(json[0]);
                setIsLoaded(true);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }}) ()
    }, [])


    if (!isLoaded) {
        return(
            <Loading />
        )
    } else {
        return (
            <>
                <div className="row py-5 justify-content-center">
                    <div className="col-md-8 col-sm-8 mx-5 mb-5 p-5 customBorder">
                        <h1 className="pb-3">Tervetuloa</h1>
                        <p>Ruotsalainen kirjakauppa on vuonna 2021 perustettu kirjakauppa. Valikoimamme on laaja, ja kirjoja löytyykin sivuiltamme useista eri kategorioista.</p>
                        <p> Etsi valikoimastamme lempikirjasi ja nauti lukuhetkistä!</p>
                    </div>
                </div>

                <div className="row pb-5 justify-content-center">
                    <div className="row">
                        <h1 className="pb-4 col-12 text-center">Kategoriat</h1>
                    </div>
                    <div className="row justify-content-center">
                        {categories.map(category => (
                            <Link key={category.kategoriaNro} className="d-flex col-sm-3 btn align-items-center justify-content-center categoryButton m-2 link"
                                to={{
                                    pathname: '/AllBooks',
                                    state: {
                                        id: category.kategoriaNro,
                                        name: category.kategoria
                                    }
                                }}>
                                    {category.kategoria}
                            </Link>

                            // <div className="d-flex align-items-center col-sm-3 btn categoryButton m-2">
                            //     <Link key={category.kategoriaNro} className="col text-center link"
                            //         to={{
                            //             pathname: '/AllBooks',
                            //             state: {
                            //                 id: category.kategoriaNro,
                            //                 name: category.kategoria
                            //             }
                            //         }}>
                            //         {category.kategoria}
                            //     </Link>
                            // </div>
                        ))}
                    </div>
                </div>
                <h3>Kuukauden kirjat</h3>
                <div className="row carouselBorder">
                    <BookCarousel bookdata={selected} />
                </div>
                <h3>Uutuudet</h3>
                <div className="row carouselBorder">
                    <BookCarousel bookdata={newbooks} />
                </div>
            </>
        )
    }
}
