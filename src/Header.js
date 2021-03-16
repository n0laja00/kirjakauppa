import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="row header">
            <div className="col-12 text-center">
            <h1>Kirjasto</h1>
            </div>
            <Navbar />
        </div>
    )
}
