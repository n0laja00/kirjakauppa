import React from 'react'

export default function Loading() {
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-auto d-block">
                <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
            </div>
            <h2 className="col-auto d-block">Loading...</h2>
        </div>
    )
}
