import React from 'react'
import BookCarousel from './Carousel'
import fpimage from './img/frontpgimg.jpg'

export default function Content() {

    return (
        <div className="row">
            <div>
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-md-8 col-sm-8 mx-5 mb-5 p-5 customBorder">
                        <h1 className="pb-3">Tervetuloa</h1>
                        <p>Ruotsalainen kirjakauppa on vuonna 2021 perustettu kirjakauppa. Valikoimamme on laaja, ja kirjoja löytyykin sivuiltamme useista eri kategorioista.</p>
                        <p> Etsi valikoimastamme lempikirjasi ja nauti lukuhetkistä!</p>
                    </div>
                    <div className="col-2 d-none d-lg-block pb-3"><img src={fpimage} alt="shop" className="img-fluid fpimg d-none d-md-block"></img></div>
                </div>

                <div className="row pb-5 d-flex justify-content-center">
                    <div className="row">
                    <h1 className="pb-4 col-12 text-center">Kategoriat</h1>
                    </div>
                    <button className="col-sm-2 m-2 btn categoryButton">Tietokirjallisuus</button>

                    <button className="col-sm-2 m-2 btn categoryButton">Toiminta</button>

                    <button className="col-sm-2 m-2 btn categoryButton">Sci-fi ja fantasia</button>

                    <button className="col-sm-2 m-2 btn categoryButton">Oppikirjat</button>

                    <button className="col-sm-2 m-2 btn categoryButton">Kauhu ja trilleri</button>

                    <button className="col-sm-2 m-2 btn categoryButton">Romantiikka</button>

                    <button className="col-sm-2 m-2 btn categoryButton">Lastenkirjat</button>
                </div>
                <h3>Kuukauden kirjat tms</h3>
                <div className="row carouselBorder">
                    <BookCarousel/>
                </div>
            </div>
        </div>
    )
}
