import React from 'react'
import Maps from './Maps'

export default function Footer() {
    return (
        <footer className="">
            <section className="row text-center fw-bold footer_top_section">
                <div className="col-4 footer_top pt-2">
                    <p>Sijainti</p>
                </div>
                <div className="col-4 footer_top pt-2">
                    <p>Somet</p>
                </div>
                <div className="col-4 footer_top pt-2">
                    <p>Yhteystiedot</p>
                </div>
            </section>
            <section className="row">
                <div className="col-4 ">
                    <p>Löydät myymälöitämme Katajakoskelta ja Tarveeselältä!</p>
                     <div className="map_container">
                        <Maps className="map"/>
                     </div>
                </div>
                <div className="col-4 ">
                    <div class="container mt-5 mb-5 d-flex justify-content-center">
                        <ul class="social-list">
                            <li>
                                <div class="maincard">
                                    <div class="thecard">
                                        <a href="#">
                                            <div class="thefront text-center facebook">
                                                <div class="social-icon"> <i class="fa fa-facebook fa-2x"></i> </div>
                                            </div>
                                            <div class="theback text-center facebook">
                                                <div class="social-text mt-1"> <small class="font-weight-bold">Facebook</small> </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="maincard">
                                    <div class="thecard">
                                        <a href="#">
                                            <div class="thefront text-center instagram">
                                                <div class="social-icon"> <i class="fa fa-instagram fa-2x"></i> </div>
                                            </div>
                                            <div class="theback text-center instagram">
                                                <div class="social-text mt-1"> <small class="font-weight-bold">Instagram</small> </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="maincard ">
                                    <div class="thecard">
                                        <a href="#">
                                            <div class="thefront text-center youtube">
                                                <div class="social-icon"> <i class="fa fa-youtube fa-2x"></i> </div>
                                            </div>
                                            <div class="theback text-center youtube">
                                                <div class="social-text mt-1"> <small class="font-weight-bold">Youtube</small> </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 text-end">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat,
                    earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus,
                    earum optio excepturi facilis iste modi illum libero natus ipsam accusantium!</p>
                </div>
            </section>
            <section className="row">
                <div className="col-12 copyright_footer">
                <p>Study Group 6 Copyright</p>
                </div>
            </section>
        </footer>

        
    )
}
