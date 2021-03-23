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

        <div>
            <section className="float_container">
                <div className="float_child_book_img">
                <img
                    className="d-block w-100"
                    src={require('./img/eka.png').default}
                    alt="First slide"
                />
                </div>
                <div className="float_child">
                    <p>Nimi</p>
                    <p>Kirjoittaja</p>
                    <p>Julkaisija</p>
                    <p>Vuosi</p>
                </div>
            </section>

            <section>
                <p className="book_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat, earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus, earum optio excepturi facilis iste modi illum libero natus ipsam accusantium!</p>
            </section>

        </div>

        <div>
            <section className="float_container">
                <div className="float_child_book_img">
                <img
                    className="d-block w-100"
                    src={require('./img/toka.png').default}
                    alt="First slide"
                />
                </div>
                <div className="float_child">
                    <p>Nimi</p>
                    <p>Kirjoittaja</p>
                    <p>Julkaisija</p>
                    <p>Vuosi</p>
                </div>
            </section>

            <section>
                <p className="book_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat, earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus, earum optio excepturi facilis iste modi illum libero natus ipsam accusantium!</p>
            </section>

        </div>

        <div>
            <section className="float_container">
                <div className="float_child_book_img">
                <img
                    className="d-block w-100"
                    src={require('./img/kolmas.png').default}
                    alt="First slide"
                />
                </div>
                <div className="float_child">
                    <p>Nimi</p>
                    <p>Kirjoittaja</p>
                    <p>Julkaisija</p>
                    <p>Vuosi</p>
                </div>
            </section>

            <section>
                <p className="book_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat, earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus, earum optio excepturi facilis iste modi illum libero natus ipsam accusantium!</p>
            </section>

        </div>

        <div>
            <section className="float_container">
                <div className="float_child_book_img">
                <img
                    className="d-block w-100"
                    src={require('./img/eka.png').default}
                    alt="First slide"
                />
                </div>
                <div className="float_child">
                    <p>Nimi</p>
                    <p>Kirjoittaja</p>
                    <p>Julkaisija</p>
                    <p>Vuosi</p>
                </div>
            </section>

            <section>
                <p className="book_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat, earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus, earum optio excepturi facilis iste modi illum libero natus ipsam accusantium!</p>
            </section>

        </div>
        </Carousel>
    )
}