import React from 'react'

export default function LoadingButton() {
    return (
        <>
            <button disabled class="col-3 btn btn-primary">
                <i className="fa fa-spinner fa-spin " aria-hidden="true"></i>
            </button>
        </>
    )
}
