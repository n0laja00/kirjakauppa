import React from 'react'

export default function Content() {
    return (
        <div className="row">
            <div className="row d-flex justify-content-center">
                <div className="row p-4">
                    <div className="col">
                        <h2>Verkkokauppa pitch</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, minus, ducimus animi voluptatibus fugiat, earum esse rem eveniet veritatis quia! Maxime suscipit ratione saepe sed dolor aperiam velit accusamus, earum optio excepturi facilis iste modi illum libero natus ipsam accusantium!
                    </div>
                </div>

                <div className="row pb-5 kategoriat">
                    <h3>Kategoriat</h3>
                    <div className="col-sm-3">
                        kategoria</div>
                    <div className="col-sm-3">
                        kategoria</div>
                    <div className="col-sm-3">
                        kategoria</div>
                    <div className="col-sm-3">
                        kategoria</div>
                </div>

                <h3>Kuukauden kirjat tms</h3>
                <div className="col-1 d-flex align-items-center" >Previous</div>
                <div className="col content m-2">
                    <img src="{book}" height=""></img>
                    <p>Kirjan nimi</p>
                    <p>Kuvaus</p>
                    <p>Hinta</p>
                </div>
                <div className="col content m-2">
                    <img src="{book}" height=""></img>
                    <p>Kirjan nimi</p>
                    <p>Kuvaus</p>
                    <p>Hinta</p>
                </div>
                <div className="col content m-2">
                    <img src="{book}" height=""></img>
                    <p>Kirjan nimi</p>
                    <p>Kuvaus</p>
                    <p>Hinta</p>
                </div>
                <div className="col-1 d-flex align-items-center">Next</div>
            </div>
        </div>
    )
}
