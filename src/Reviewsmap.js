import React from 'react'
import Rating from './Rating'

export default function Reviewsmap({ review }) {
    return (
        <div className="row mx-3 mt-5 p-4 bottomBg customBorder">
            <h3>
                <u>Kirjan arvostelut</u>
            </h3>
            <div className="col mt-3">
                {review.map(rev => (
                    <div className="row" key={rev.arvosteluNro}>
                        <h4 className="col-sm-6 mb-3">{rev.otsikko}</h4>
                        <Rating rev={rev.arvosana} />
                        <div className="col-sm-12">{rev.teksti}</div>
                        <div className="col-12 text-end mt-3">Arvostelija: {rev.nimimerkki}
                        </div>
                        <div className="col mb-3 text-end border-bottom border-primary"> {rev.luotu} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}