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
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
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
        removeArrowOnDeviceType={["tablet", "mobile"]} 
        className="carouselBorder">

        {/* Ulommaisin DIV on yksi kirjakarusellin tuote. */}
        {books.map(book => (
          <div className="row justify-content-center mx-1 my-3" key={uuid()}>
            <div className="card shadow cardHover col-xl-10" key={book.kirjaNimi}>
              {/* kuvaa klikkaamalla pääsee kirjan sivulle */}
              <Link to={'/BookDetails/' + book.kirjaNro} className="d-flex justify-content-center">
                <img className="carousel-card-img-top p-3"
                  src={imgURL + book.kuva}
                  alt={book.kirjaNimi}>
                </img>
              </Link>
              <div className="row">
                <h3 className="card-font col-12 cut-text text-center col-auto"><b>{book.kirjaNimi}</b></h3>
                <div className="text-center d-none d-lg-block card-font cut-text col-12">{book.kuvaus}</div>
                <h5 className="card-font col-12 cut-text text-center col-auto my-3">{book.hinta} €</h5>
              </div>
              <div className="row">
                <Link to={'/BookDetails/' + book.kirjaNro} className="link text-center">
                  <div className="mb-4 btn readMoreBtn col-auto" name={book.kirjaNimi}>Lue lisää</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    )
  }
}
