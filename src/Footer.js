import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-5">
            <section className="row text-center fw-bold">
                <div className="col-4 border-dark border footer_top pt-2">
                    <p>Sijainti</p>
                </div>
                <div className="col-4 border-dark border footer_top pt-2">
                    <p>Somet</p>
                </div>
                <div className="col-4 border-dark border footer_top pt-2">
                    <p>Yhteystiedot</p>
                </div>
            </section>
            <section className="row border border-dark">
            <div className="col-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat, 
                    earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus, earum optio excepturi
                     facilis iste modi illum libero natus ipsam accusantium!</p>
            </div>
            <div className="col-4 border-dark border border-top-0">
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
    </footer>
    )
}
