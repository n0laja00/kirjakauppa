import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import uuid from "react-uuid"
import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading';

// https://www.npmjs.com/package/react-multi-carousel sivulta mallia
export default function BookCarousel({ bookdata }) {
  // Bookdata kertoo, mitä PHP tiedostoa käytetään.
  // Books ja setBooks sisältää PHP tiedostosta SQL haulla saadut kirjat. 
  const [books, setBooks] = useState([]);
  const URL = 'http://localhost/kirjakauppa/';
  const imgURL = 'http://localhost/kirjakauppa/img/';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let status = 0;

    fetch(URL + bookdata)
      .then(res => {
        status = parseInt(res.status);
        return res.json();
      })
      .then(
        (res) => {
          if (status === 200) {
            setBooks(res);
            setIsLoaded(true)
          } else {
            alert(res.error);
            setIsLoaded(false);
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

  if (!isLoaded) {
    return <Loading />
  } else {
    return (
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        centerMode={true}
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]} >

        {/* Ulommaisin DIV on yksi kirjakarusellin tuote. */}
        {books.map(book => (
          <div className="row d-block book_divider carousel_container mx-1" key={uuid()}>
            <div className="card col-11 mx-4 my-3 cardHover" key={book.kirjaNimi}>
              <div className="image_container">
                <img className="card-img-top p-4 img-fluid" src={imgURL + book.kuva} alt={book.kirjaNimi}>
                </img>
              </div>
              <div className="row d-sm-block d-none">
                <h3 className="px-5 card-title cut-text col-auto">{book.kirjaNimi}</h3>
                <div className="px-5 card-text cut-text col-auto">{book.kuvaus}</div>
                <h5 className="px-5 card-subtitle col-auto p-3"><b>{book.hinta} €</b></h5>
              </div>
              <div className="row">
                <Link to={'/BookDetails/' + book.kirjaNro} className="link text-center">
                  <div className="mb-4 btn readMoreBtn col-sm-8 col-md-6" name={book.kirjaNimi}>Lue lisää</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    )
  }
}
