import React from 'react'

export default function AddItem() {
    return (
        <div className="addItemContainer">
            <h3>Lisää tuote:</h3>
            <form className="row g-3 addItemForm mt-1">
                <div className="col-md-5">
                    <label for="kirjaNimi" className="form-label">Kirjan nimi</label>
                    <input type="text" className="form-control" id="kirjaNimi" name="kirjanimi"/>
                </div>
                <div className="col-md-5">
                    <label for="julkaisija" className="form-label">Julkaisija</label>
                    <select id="julkaisija" className="form-select">
                    <option selected>Valitse...</option>
                    {/* Pitää tehdä myöhemmin "Lisää uusi julkaisija" */}
                    </select>
                </div>
                <div>
                    <label for="kirjoittaja"></label>
                </div>
                <div className="col-md-2">
                    <label for="sivuNro" className="form-label">Sivumäärä</label>
                    <input type="number" className="form-control" min="1" id="sivuNro" step="10" name="sivuNro"/>
                </div>
                <div className="col-md-2">
                    <label for="hinta" className="form-label">Hinta</label>
                    <input type="number" className="form-control" id="hinta" min="1"/>
                </div>
                <div className="col-md-2">
                    <label for="kustannus" className="form-label">Kustannus</label>
                    <input type="number" className="form-control" id="kustannus" min="1"/>
                </div>
                <div className="col-md-8">
                    <label for="julkaistu" className="form-label">Julkaistu</label>
                    <input type="number" className="form-control" id="julkaistu"/>
                </div>
                <div className="col-12">
                    <label for="kuvaus" className="form-label">Kuvaus</label>
                    <textarea name="kuvaus" id="kuvaus" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </form>
        </div>
    )
}
