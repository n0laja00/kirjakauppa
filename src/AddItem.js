import React from 'react'

export default function AddItem() {
    return (
        <div className="addItemContainer">
            <h3>Lisää tuote:</h3>
            <div className="addItemForm">
                <label>Kirjan nimi</label>
                <input type="text"/>
            </div>
        </div>
    )
}
