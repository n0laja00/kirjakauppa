import React from 'react'

export default function Reviews() {
    return (
        <div className="row">
            <div className="col mx-3 p-4 bottomBg customBorder">
                <h3>Arvostelut</h3>
                <div className="mb-3">
                    <label for="reviewerName" className="form-label">Arvostelija</label>
                    <input type="text" className="form-control" id="reviewerName" name="reviewerName" placeholder="Nimi" />
                </div>
                <div className="mb-3">
                    <label for="reviewTextArea" className="form-label">Arvostelu</label>
                    <textarea className="form-control" id="reviewTextArea" name="reviewTextArea" rows="3" placeholder="Kirjoita tähän vapaamuotoinen arvostelu"></textarea>
                </div>
            </div>
        </div>
    )
}
