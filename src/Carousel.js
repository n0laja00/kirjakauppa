import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import uuid from "react-uuid"
import { useState, useEffect, React } from 'react'

// https://www.npmjs.com/package/react-multi-carousel sivulta mallia
export default function BookCarousel({bookdata}) {
  // Bookdata kertoo, mitä PHP tiedostoa käytetään.
  // Books ja setBooks sisältää PHP tiedostosta SQL haulla saadut kirjat. 
    const [books, setBooks] = useState([]);
    const URL = 'http://localhost/kirjakauppa/';
    const imgURL = 'http://localhost/kirjakauppa/img/';


    
    useEffect(() => {
        let status = 0;

        fetch(URL + bookdata)
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
      }, [bookdata])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1000, min: 770 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 770, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      //Book carousel arrows
      const CustomRightArrow = ({ onClick }) => {
        return <img aria-label="Mene seuraavaan diaan" className="custom_right_arrow"
        src={require('./custom_carousel/arrow-right.png').default} onClick={() => onClick()} />;
      };
      const CustomLeftArrow = ({ onClick }) => {
        return <img aria-label="Mene seuraavaan diaan" className="custom_left_arrow"
        src={require('./custom_carousel/arrow-left.png').default} onClick={() => onClick()} />;
      };

    return(
        <Carousel 
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        centerMode={true}
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]} >

        {/* Ulommaisin DIV on yksi kirjakarusellin tuote. */}
        {books.map(book => (
            <div className="book_divider light_brown carousel_container" key={uuid()}>
                <section className="float_container">
                    <div className="float_child_book_img">
                    <img
                        src={imgURL + book.kuva}
                        alt="Kirjan kuva"
                    />
                    </div>
                    <div className="float_child col-sm-auto">
                        <p className="cut-text mt-md-1">{book.kirjaNimi}</p>
                        <p className="cut-text">{book.sukunimi} {book.etunimi}</p>
                        <p className="cut-text">{book.julkaisija}</p>
                        <p className="cut-text">{book.vuosi}</p>
                    </div>
                </section>

                <section className="book_description">
                    <p className="cut-text">{book.kuvaus}</p>
                </section>
            </div>
            ))}

        </Carousel>
    )
}
