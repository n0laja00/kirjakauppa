import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// https://www.npmjs.com/package/react-multi-carousel sivulta mallia
export default function BookCarousel() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
        <Carousel 
        centerMode={true}
        responsive={responsive}
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile"]} >

        <div className="text-center">
        <img
            className="d-block w-100 book_img"
            src={require('./img/eka.png').default}
            alt="First slide"
        />
        <h3>Kirja yksi</h3>
        <p>Kirjan kuvaus</p>
        </div>

        <div className="text-center">
        <img
            className="d-block w-100 book_img"
            src={require('./img/toka.png').default}
            alt="Second slide"
        />
        <h3>Kirja kaksi</h3>
        <p>Kirjan kuvaus</p>
        </div>

        <div className="text-center">
        <img
            className="d-block w-100 book_img"
            src={require('./img/kolmas.png').default}
            alt="Third slide"
        />
        <h3>Kirja kolme</h3>
        <p>Kirjan kuvaus</p>
        </div>

        <div className="text-center">
        <img
            className="d-block w-100 book_img"
            src={require('./img/eka.png').default}
            alt="Fourth slide"
        />
        <h3>Kirja yksi</h3>
        <p>Kirjan kuvaus</p>
        </div>
        </Carousel>
    )
}